export const helpOptions = ["Branding & strategy", "Social media & content", "Website & e-commerce", "Digital marketing", "Something else", "Not sure yet"];
export type ContactData = { name: string; email: string; business: string; help: string; message: string; website: string };
export function validateContact(data: ContactData) {
  const errors: Partial<Record<keyof ContactData, string>> = {};
  if (!data.name.trim() || data.name.length > 100) errors.name = "Please enter your name (up to 100 characters).";
  if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(data.email) || data.email.length > 254) errors.email = "Please enter a valid email address.";
  if (data.business.length > 150) errors.business = "Please keep the business name under 150 characters.";
  if (data.help && !helpOptions.includes(data.help)) errors.help = "Please choose an option from the list.";
  if (!data.message.trim() || data.message.length > 5000) errors.message = "Please tell us about your project (up to 5,000 characters).";
  return errors;
}
