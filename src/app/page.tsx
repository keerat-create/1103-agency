import { ArrowUpRight, Asterisk } from "@/components/icons";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SectionHeading } from "@/components/section-heading";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import { ContactForm } from "@/components/contact-form";
import { contactConfig } from "@/lib/contact-config";
import { BrandLogoStrip } from "@/components/brand-logo-strip";

const services = [
  { title: "Find your direction.", description: "Brand strategy, positioning & storytelling", number: "01" },
  { title: "Make your mark.", description: "Brand identity, design & creative execution", number: "02" },
  { title: "Start a conversation.", description: "Social media, content & digital marketing", number: "03" },
  { title: "Build what’s next.", description: "Websites, e-commerce & digital experiences", number: "04" },
];

export default function Home() {
  const contact = contactConfig();
  return (
    <div className="site-shell">
      <Navigation />
      <main id="main">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-topline"><p className="eyebrow">1103 Agency. Your creative marketing team.</p></div>
          <div className="hero-layout">
            <div className="hero-copy">
              <h1 id="hero-heading">Big ideas for<br /><em>every</em> business.</h1>
              <p className="hero-description">We’re a creative marketing team helping brands find their footing, solve their challenges, and make their next big move.</p>
              <div className="hero-actions"><a className="button button-rust" href="#work">Explore our work <ArrowUpRight /></a><a className="text-link" href="#contact">Let’s talk <ArrowUpRight /></a></div>
            </div>
            <div className="idea-composition">
              <span className="idea-orbit idea-orbit-one" aria-hidden="true" /><span className="idea-orbit idea-orbit-two" aria-hidden="true" />
              <span className="idea-spark" aria-hidden="true"><Asterisk /></span>
              <div className="idea-paper">
                <span className="eyebrow">A good place to start</span>
                <p className="idea-question">What <em>if?</em></p>
                <div className="idea-rule" />
                <p className="idea-message">A little perspective.<br />A lot of possibility.</p>
                </div>
              <span className="idea-sticker">Think big.<br /><em>Start now.</em></span>
              <span className="composition-note">Independent minds. Big energy.</span>
            </div>
          </div>
          <div className="hero-bottom"><span>Strategy meets imagination.</span><span>Scroll to get to know us <span aria-hidden="true">↓</span></span></div>
        </section>

        <div className="perspective-strip" aria-label="Our approach"><span>Fresh thinking</span><span aria-hidden="true"><Asterisk /></span><span>Honest collaboration</span><span aria-hidden="true"><Asterisk /></span><span>Creative with purpose</span><span aria-hidden="true"><Asterisk /></span><span>Global perspective</span></div>

        <section id="about" className="section about-section" aria-labelledby="about-heading">
          <SectionHeading number="01" label="A little about us" />
          <div className="about-layout"><h2 id="about-heading">Experience across borders.<br /><em>From the US to Canada.</em></h2><div><p className="large-copy">Good things happen when fresh eyes meet real business challenges.</p><p>We’re 1103, a creative marketing agency with experience across the US, Canada, and India. We bring strategy, storytelling, and thoughtful execution together to help brands move forward.</p><p>From your first big idea to your next chapter, there’s room for you here.</p><span className="about-note">Different perspectives. One shared purpose.</span></div></div>
        </section>

        <BrandLogoStrip />

        <section id="work" className="section work-section" aria-labelledby="work-heading">
          <SectionHeading number="02" label="Made with purpose" />
          <div className="section-title-row"><h2 id="work-heading">Selected work.<br /><em>Fresh perspectives.</em></h2><span className="eyebrow">The portfolio / 1103</span></div>
          <PortfolioGallery />
        </section>

        <section id="services" className="section services-section services-pitch" aria-labelledby="services-heading">
          <SectionHeading number="03" label="How we help" />
          <div className="services-layout"><div className="pitch-intro"><span className="pitch-spark" aria-hidden="true"><Asterisk /></span><h2 id="services-heading">Your next big move.<br /><em>Our kind of challenge.</em></h2><p>You bring the ambition. We bring the strategy, creativity, and execution to help your brand move forward.</p><div className="pitch-actions"><a className="button" href="#contact">Let’s build what’s next <ArrowUpRight /></a><a className="text-link" href="/services">Explore our services <ArrowUpRight /></a></div></div><div className="service-list">{services.map((service) => <article className="service-row" key={service.number}><span className="service-number">{service.number}</span><div><h3>{service.title}</h3><p>{service.description}</p></div><ArrowUpRight /></article>)}</div></div>
          <p className="industries">A fresh perspective for <span>Beauty · Finance · F&B · Nutrition · Fitness · Personal brands · B2B & B2C</span></p>
        </section>

        <section id="contact" className="section contact-section contact-built" aria-labelledby="contact-heading">
          <div className="contact-paper">
            <div className="contact-welcome"><p className="eyebrow">Have something in mind? ✳</p><h2 id="contact-heading">Big ideas start with<br /><em>a little hello.</em></h2><p>Building something new? Feeling stuck? Or just looking for a creative team that gets it? We&apos;d love to hear what you&apos;re working on.</p></div>
            <ContactForm enabled={contact.enabled} email={contact.publicEmail} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
