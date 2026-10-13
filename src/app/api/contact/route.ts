import { contactConfig } from "@/lib/contact-config";
import { validateContact, type ContactData } from "@/lib/contact";

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin || !/^https?:\/\//.test(origin) || new URL(origin).host !== request.headers.get("host")) return Response.json({ error: "Please submit the form from our website." }, { status: 403 });
  if (!contactConfig().enabled) return Response.json({ error: "Our form isn’t connected yet. Please check back soon." }, { status: 503 });
  if (!request.headers.get("content-type")?.includes("application/json")) return Response.json({ error: "Please use the contact form." }, { status: 415 });
  try {
    // Stream with a hard size cap, including requests without a Content-Length header.
    const reader = request.body?.getReader();
    if (!reader) return Response.json({ error: "Please complete the form." }, { status: 400 });
    const chunks: Uint8Array[] = []; let bytes = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > 24000) { await reader.cancel(); return Response.json({ error: "Please shorten your message and try again." }, { status: 413 }); }
      chunks.push(value);
    }
    const raw = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    if (!raw || typeof raw !== "object" || Array.isArray(raw)) throw new Error("Invalid body");
    const keys = ["name", "email", "business", "help", "message", "website"] as const;
    if (keys.some(key => typeof raw[key] !== "string")) return Response.json({ error: "Please complete the form with valid text." }, { status: 400 });
    const data = Object.fromEntries(keys.map(key => [key, raw[key].trim()])) as ContactData;
    if (data.website) return Response.json({ error: "We couldn’t accept this submission. Please try again." }, { status: 400 });
    const errors = validateContact(data);
    if (Object.keys(errors).length) return Response.json({ error: "Please check the highlighted fields.", errors }, { status: 400 });
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST", headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: process.env.CONTACT_FROM_EMAIL, to: [process.env.CONTACT_TO_EMAIL], reply_to: data.email, subject: "New enquiry — 1103 Agency", text: `Name: ${data.name}\nEmail: ${data.email}\nBusiness: ${data.business || "Not provided"}\nHelp with: ${data.help || "Not specified"}\n\n${data.message}` }),
      signal: AbortSignal.timeout(10000),
    });
    const result = await response.json();
    if (!response.ok || typeof result.id !== "string" || !result.id) return Response.json({ error: "Your message couldn’t be sent. Please try again or use our email link below." }, { status: 502 });
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "We couldn’t send your message. Please check your details and try again shortly." }, { status: 400 });
  }
}
