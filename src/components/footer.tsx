
import Link from "next/link";
import { BrandLogo } from "./brand-logo";

export function Footer() {
  return <footer className="site-footer"><Link className="footer-name" href="#" aria-label="1103 Agency home"><BrandLogo size={100} /></Link><p>Independent minds. Wide perspective.</p><span>© {new Date().getFullYear()} 1103 Agency</span><Link href="#main">Back to top ↑</Link></footer>;
}
