// Import only in server components or route handlers. Never use NEXT_PUBLIC_ for these values.
export function contactConfig() {
  return {
    enabled: process.env.CONTACT_ENABLED === "true" && !!process.env.CONTACT_TO_EMAIL && !!process.env.CONTACT_FROM_EMAIL && !!process.env.RESEND_API_KEY,
    publicEmail: process.env.CONTACT_PUBLIC_EMAIL && /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(process.env.CONTACT_PUBLIC_EMAIL) ? process.env.CONTACT_PUBLIC_EMAIL : null,
  };
}
