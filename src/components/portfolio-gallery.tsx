import Image from "next/image";
import { portfolio } from "@/data/portfolio";

export function PortfolioGallery() {
  return <div className="brand-grid">
    {portfolio.map(brand => <article key={brand.slug} className={`brand-card tone-${brand.tone}`} aria-labelledby={`brand-${brand.slug}`}>
      <div className={brand.cover ? "brand-card-logo brand-card-photo" : "brand-card-logo"}>
        {brand.cover ? <Image src={brand.cover.src} alt={brand.cover.alt} width={1266} height={1494} unoptimized /> : brand.logo ? <Image src={brand.logo.src} alt={brand.logo.alt} width={600} height={400} unoptimized /> : <div className="brand-logo-placeholder">Official logo placeholder<span>Awaiting original file</span></div>}
      </div>
      <div className="brand-card-content">
        <h3 id={`brand-${brand.slug}`}>{brand.brand}</h3>
        <p>{brand.location && <><strong className="brand-location">{brand.location}</strong><br /></>}{brand.description}</p>
        <ul className="brand-service-tags" aria-label={brand.servicesProvisional ? "Provisional services" : "Services provided"}>
          {brand.services.map(service => <li key={service}>{service}{brand.servicesProvisional && <span className="service-provisional"> · Provisional</span>}</li>)}
        </ul>
      </div>
    </article>)}
  </div>;
}
