"use client";

import Link from "next/link";

import { ArrowUpRight } from "./icons";
import { BrandLogo } from "./brand-logo";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [ ["About", "/#about"], ["Work", "/#work"], ["Services", "/services"] ];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="site-header">
      <Link href="/" className="brand-label" aria-label="1103 Agency home"><BrandLogo size={158.4} /></Link>
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>{open ? "Close −" : "Menu +"}</button>
      <nav id="site-navigation" aria-label="Main navigation" className={open ? "navigation is-open" : "navigation"} onKeyDown={(event) => { if (event.key === "Escape") setOpen(false); }}>
        {links.map(([label, href]) => <Link key={href} href={href} aria-current={href === pathname ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
        <Link className="nav-contact" href="/#contact" onClick={() => setOpen(false)}>Work with us <ArrowUpRight /></Link>
      </nav>
    </header>
  );
}
