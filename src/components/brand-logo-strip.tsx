import Image from "next/image";
import { brandLogos } from "@/data/brand-logos";

export function BrandLogoStrip() {
  return <section id="brand-logos" className="brand-logo-strip logo-loop" aria-label="Brand logos">
    <div className="logo-loop-window">
      <div className="logo-loop-track">
        {[0, 1].map(copy => <div className="logo-loop-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
          {brandLogos.map(brand => <div className="strip-logo" key={brand.src}><Image src={brand.src} alt={copy === 1 ? "" : brand.name} style={{ transform: `scale(${brand.scale ?? 1})` }} width={240} height={120} unoptimized /></div>)}
        </div>)}
      </div>
    </div>
  </section>;
}
