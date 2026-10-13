import type { Metadata } from "next";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/dm-sans";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://1103.agency"),
  title: "1103 Agency — Big ideas for every business",
  icons: { icon: { url: "/brand/1103-favicon.jpg", type: "image/jpeg" } },
  description: "A creative marketing team helping brands find their footing, solve their challenges, and make their next big move. Strategy, branding, storytelling, and digital experiences.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a>{children}</body></html>;
}
