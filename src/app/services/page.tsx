
import Link from "next/link";
import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Asterisk, ArrowUpRight } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = { title: "Services — 1103 Agency", description: "Strategy, branding, content, websites, digital marketing, creative production, and consulting. Big ideas. Real solutions." };
const services = [
  { title: "Brand & Strategy", copy: "Building brands with a clear identity, a compelling story, and a reason to be remembered.", deliverables: ["Brand identity", "Positioning", "Brand strategy", "Messaging", "Launch planning"], tone: "cream", art: "spark" },
  { title: "Social Media & Content", copy: "Content that feels like your brand, connects with the right people, and gives them a reason to stick around.", deliverables: ["Instagram", "TikTok", "Facebook", "LinkedIn", "Content creation", "Community management"], tone: "blue", art: "conversation" },
  { title: "Websites & E-commerce", copy: "Beautiful digital experiences designed to turn curious visitors into confident customers.", deliverables: ["Website design", "Website development", "E-commerce", "Landing pages", "UX/UI"], tone: "yellow", art: "window" },
  { title: "Digital Marketing & Growth", copy: "Getting your brand in front of the right people, with smarter campaigns and measurable goals.", deliverables: ["Paid advertising", "SEO", "Email marketing", "Lead generation", "Marketing funnels"], tone: "rust", art: "growth" },
  { title: "Creative Campaigns & Production", copy: "Big creative thinking, brought to life through campaigns, visuals, and experiences that stand out.", deliverables: ["Campaign concepts", "Creative direction", "Photography", "Video", "Launch campaigns"], tone: "blue", art: "frame" },
  { title: "Marketing Consulting", copy: "Fresh perspectives, practical solutions, and a creative partner to help you navigate what's next.", deliverables: ["Marketing audits", "Growth planning", "Business positioning", "Marketing roadmaps"], tone: "cream", art: "compass" },
];
const steps = [
  { title: "Discover", copy: "We get to know your business, your challenges, and what success looks like for you." },
  { title: "Create", copy: "We build a thoughtful strategy and bring the right creative ideas to life." },
  { title: "Grow", copy: "We learn, refine, and keep moving your business forward." },
];
function ServiceArt({ kind }: { kind: string }) {
  return <div className={`service-illustration illustration-${kind}`} aria-hidden="true"><span className="illustration-orbit" /><span className="illustration-mark">{kind === "growth" ? <ArrowUpRight /> : <Asterisk />}</span><span className="illustration-accent" /></div>;
}
export default function ServicesPage() {
  return <div className="site-shell services-page"><Navigation /><main id="main">
    <section className="services-page-hero" aria-labelledby="services-hero-heading">
      <div className="services-hero-copy"><p className="eyebrow">What we do ✳</p><h1 id="services-hero-heading">Big ideas.<br /><em>Real solutions.</em></h1><p>From the first spark of an idea to the next big milestone, we bring together the strategy, creativity, and execution to move your business forward.</p><span className="services-hero-note">Not sure what you need? That&apos;s where we come in.</span><Link className="text-link" href="#capabilities">Explore our services ↓</Link></div>
      <div className="services-hero-art" aria-hidden="true"><span className="services-art-orbit" /><span className="services-art-star"><Asterisk /></span><span className="services-art-label">Strategy<br /><em>meets imagination.</em></span><span className="services-art-seal">A fresh<br />perspective ↗</span></div>
    </section>
    <section id="capabilities" className="section capabilities-section" aria-labelledby="capabilities-heading"><SectionHeading number="01" label="The right ideas, brought to life" /><div className="section-title-row"><h2 id="capabilities-heading">Six ways to<br /><em>move forward.</em></h2><p className="capabilities-note">Thoughtful strategy.<br />Creative with purpose.</p></div><div className="capabilities-grid">{services.map((service, index) => <article className={`capability-card capability-${service.tone}`} key={service.title}><div className="capability-top"><span className="eyebrow">{String(index + 1).padStart(2, "0")}</span><ServiceArt kind={service.art} /></div><h3>{service.title === "Websites & E-commerce" ? <>Websites &amp; <span className="service-unbroken">E-commerce</span></> : service.title}</h3><p>{service.copy}</p><ul aria-label={`${service.title} deliverables`}>{service.deliverables.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div></section>
    <section className="section process-section" aria-labelledby="process-heading"><SectionHeading number="02" label="How we work" /><h2 id="process-heading">A shared ambition.<br /><em>A thoughtful process.</em></h2><ol className="process-grid">{steps.map((step,index) => <li key={step.title}><span className="process-number">{String(index + 1).padStart(2,"0")}</span><h3>{step.title}</h3><p>{step.copy}</p><span className="process-arrow" aria-hidden="true">{index === 2 ? <Asterisk /> : <ArrowUpRight />}</span></li>)}</ol></section>
    <section className="services-final-cta" aria-labelledby="services-cta-heading"><span className="services-cta-star" aria-hidden="true"><Asterisk /></span><p className="eyebrow">Your next chapter</p><h2 id="services-cta-heading">Got a challenge?<br /><em>We&apos;ve got ideas.</em></h2><p>Tell us what you&apos;re working on.<br />We&apos;ll figure out the next move together.</p><Link className="button" href="/#contact">Let&apos;s talk <ArrowUpRight /></Link></section>
  </main><Footer /></div>;
}
