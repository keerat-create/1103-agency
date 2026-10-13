"use client";
import { useRef, useState, type FormEvent } from "react";
import { helpOptions, validateContact, type ContactData } from "@/lib/contact";

export function ContactForm({ enabled, email }: { enabled: boolean; email: string | null }) {
  const [errors, setErrors] = useState<Partial<Record<keyof ContactData, string>>>({});
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [notice, setNotice] = useState("");
  const status = useRef<HTMLDivElement>(null);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); if (!enabled || state === "sending") return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    const data = Object.fromEntries(["name", "email", "business", "help", "message", "website"].map(key => [key, String(fields.get(key) ?? "").trim()])) as ContactData;
    const validation = validateContact(data); setErrors(validation);
    if (Object.keys(validation).length) { form.querySelector<HTMLElement>(`[name="${Object.keys(validation)[0]}"]`)?.focus(); return; }
    setState("sending"); setNotice("");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data), signal: AbortSignal.timeout(15000) });
      const result = await response.json();
      if (!response.ok || result.success !== true) {
        setErrors(result.errors ?? {}); throw new Error(result.error || "Something went wrong. Please try again.");
      }
      setState("success"); setNotice("Thanks for saying hello! Your message has been accepted for sending to our team. We look forward to hearing more."); form.reset();
    } catch (error) { setState("error"); setNotice(error instanceof Error && error.name !== "TimeoutError" ? error.message : "The connection timed out. Please try again shortly."); }
    requestAnimationFrame(() => status.current?.focus());
  }
  const error = (key: keyof ContactData) => errors[key] && <span className="contact-field-error" id={`error-${key}`}>{errors[key]}</span>;
  return <div className="contact-form-wrap">
    {!enabled && <div className="contact-unavailable" id="contact-unavailable">Our contact form is being connected. Sending is currently unavailable—please check back soon.</div>}
    <form onSubmit={submit} noValidate aria-describedby={!enabled ? "contact-unavailable" : undefined}>
      <div className="contact-form-grid">
        <label htmlFor="contact-name">Name <span aria-hidden="true">*</span><input id="contact-name" name="name" autoComplete="name" required maxLength={100} aria-invalid={!!errors.name} aria-describedby={errors.name ? "error-name" : undefined} placeholder="Your name" />{error("name")}</label>
        <label htmlFor="contact-email">Email address <span aria-hidden="true">*</span><input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} aria-invalid={!!errors.email} aria-describedby={errors.email ? "error-email" : undefined} placeholder="Where we can reach you" />{error("email")}</label>
        <label htmlFor="contact-business">Business or brand name <span className="contact-optional">(optional)</span><input id="contact-business" name="business" autoComplete="organization" maxLength={150} aria-invalid={!!errors.business} aria-describedby={errors.business ? "error-business" : undefined} placeholder="Your business or brand" />{error("business")}</label>
        <label htmlFor="contact-help">What do you need help with?<select id="contact-help" name="help" defaultValue="" aria-invalid={!!errors.help} aria-describedby={errors.help ? "error-help" : undefined}><option value="">Choose an option (optional)</option>{helpOptions.map(option => <option key={option}>{option}</option>)}</select>{error("help")}</label>
        <label className="contact-message" htmlFor="contact-message">Tell us about your project <span aria-hidden="true">*</span><textarea id="contact-message" name="message" required maxLength={5000} rows={5} aria-invalid={!!errors.message} aria-describedby={errors.message ? "error-message" : undefined} placeholder="The idea, the challenge, the next chapter…" />{error("message")}</label>
      </div>
      <div className="contact-honeypot" aria-hidden="true"><label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <div className="contact-submit-row"><button type="submit" className="button button-rust" disabled={!enabled || state === "sending"}>{state === "sending" ? "Sending…" : "Let’s talk ↗"}</button><span>Fields marked * are required.</span></div>
      <div ref={status} tabIndex={-1} role={state === "error" ? "alert" : "status"} className={`contact-form-status ${state}`}>{notice}</div>
    </form>
    <p className="contact-direct">Prefer email? {email ? <a href={`mailto:${email}`}>{email} ↗</a> : <span>Official email awaiting configuration.</span>}</p>
  </div>;
}
