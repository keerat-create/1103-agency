/** Add brands here; array order determines display order.
 * Use the exact approved logo under public/portfolio/ and reference its /portfolio/ path.
 * null shows a labeled placeholder. Set servicesProvisional:false after approval.
 */
export type PortfolioBrand = {
  slug: string;
  brand: string;
  description: string;
  location?: string;
  cover?: { src: string; alt: string };
  logo: { src: string; alt: string } | null;
  services: string[];
  servicesProvisional: boolean;
  tone: "rose" | "blue" | "butter" | "sage";
};

export const portfolio: PortfolioBrand[] = [
  {
    slug: "the-fit-tiffin-co",
    brand: "The Fit Tiffin Co.",
    description: "A healthy meal delivery brand making nutritious eating convenient, accessible, and delicious.",
    location: "Victoria, British Columbia",
    cover: { src: "/portfolio/fit-tiffin-profile-placeholder.jpg", alt: "The Fit Tiffin Co. Instagram profile — supplied placeholder image" },
    logo: { src: "/portfolio/fit-tiffin-co-logo.png", alt: "The Fit Tiffin Co. official logo" },
    services: [
      "Branding",
      "E-commerce website",
      "Launch strategy",
      "Social media (Instagram, TikTok & Facebook)",
      "Paid advertising",
      "Campaign production (offline shoots)",
    ],
    servicesProvisional: false,
    tone: "sage",
  },
  {
    slug: "soft-launch-jewellery",
    brand: "Soft Launch Jewellery",
    location: "India",
    cover: { src: "/portfolio/soft-launch-placeholder.png", alt: "Soft Launch Jewellery necklace collection — supplied placeholder image" },
    description: "An affordable 18K gold-plated jewellery brand bringing everyday elegance and accessible luxury together.",
    logo: null,
    services: [
      "Branding",
      "E-commerce website",
      "Launch strategy",
      "Social media (Instagram, TikTok & Facebook)",
      "Paid advertising",
      "Campaign production (offline shoots)",
    ],
    servicesProvisional: false,
    tone: "sage",
  },
  {
    slug: "phifer-bookkeeping",
    brand: "Phifer Bookkeeping",
    cover: { src: "/portfolio/phifer-placeholder.png", alt: "Phifer Bookkeeping profile — supplied placeholder image" },
    location: "Ohio, US",
    description: "A professional bookkeeping business helping clients simplify their finances and stay focused on running their businesses.",
    logo: null,
    services: [
      "Search engine optimization (SEO)",
      "Website development",
      "Email marketing",
      "LinkedIn marketing",
      "Lead generation",
    ],
    servicesProvisional: false,
    tone: "sage",
  },
];
