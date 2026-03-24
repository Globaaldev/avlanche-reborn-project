import SEOHead from "@/components/SEOHead";
import AnimatedSection from "@/components/AnimatedSection";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  return (
    <div className="flex-1 flex items-center justify-center px-6 py-10">
      <SEOHead
        title="Contact — Avlanche Music & Studio"
        description="Contactez Avlanche Music (label, publishing, production, presse) et Avlanche Studio (enregistrement, mixage, mastering) à Ivry-sur-Seine."
        path="/contact"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Avlanche",
          "url": "https://avlanche.fr/contact",
        }}
      />
      <AnimatedSection>
        <div className="text-foreground font-normal tracking-wide space-y-12 text-center max-w-lg mx-auto">
          <h1 className="text-2xl md:text-4xl tracking-[0.08em] uppercase mb-10" style={{ fontFamily: 'var(--nav-font)', fontWeight: 600 }}>
            Contact
          </h1>

          {/* AVLANCHE MUSIC */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-4">
              <h2 className="text-foreground text-base md:text-lg tracking-[0.2em] uppercase font-semibold">
                Avlanche Music
              </h2>
              <p className="text-foreground/60 text-sm md:text-base">
                <a href="tel:+33142509383" className="text-foreground hover:opacity-70 transition-opacity underline">
                  01 42 50 93 83
                </a>
              </p>
              <div className="space-y-2 text-sm md:text-base text-foreground/60">
                <p>
                  <span className="text-foreground/40 tracking-[0.1em] uppercase text-xs">Publishing</span>
                  <br />
                  Dhelat Mabiala —{" "}
                  <a href="mailto:dhelat@avlanche.fr" className="text-foreground hover:opacity-70 transition-opacity">
                    dhelat@avlanche.fr
                  </a>
                </p>
                <p>
                  <span className="text-foreground/40 tracking-[0.1em] uppercase text-xs">Production</span>
                  <br />
                  Valentin Rey —{" "}
                  <a href="mailto:valentin@avlanche.fr" className="text-foreground hover:opacity-70 transition-opacity">
                    valentin@avlanche.fr
                  </a>
                </p>
                <p>
                  <span className="text-foreground/40 tracking-[0.1em] uppercase text-xs">Presse</span>
                  <br />
                  <a href="mailto:presse@avlanche.fr" className="text-foreground hover:opacity-70 transition-opacity">
                    presse@avlanche.fr
                  </a>
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* AVLANCHE STUDIO */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-4 pt-6 border-t border-foreground/10">
              <h2 className="text-foreground text-base md:text-lg tracking-[0.12em] uppercase font-normal" style={{ fontFamily: 'var(--nav-font)' }}>
                Avlanche Studio
              </h2>
              <p className="text-foreground/60 text-sm md:text-base">
                <a href="tel:+33155533136" className="text-foreground hover:opacity-70 transition-opacity underline">
                  01 55 53 31 36
                </a>
              </p>
              <p className="text-sm md:text-base text-foreground/60">
                Marie-Soleil Fabrègues —{" "}
                <a href="mailto:marie-soleil@avlanche.fr" className="text-foreground hover:opacity-70 transition-opacity">
                  marie-soleil@avlanche.fr
                </a>
              </p>
              <address className="not-italic space-y-1 text-sm md:text-base text-foreground/40 leading-relaxed pt-2">
                <p>44 rue Jules Vanzuppe</p>
                <p>94200 Ivry-sur-Seine</p>
              </address>
            </div>
          </ScrollReveal>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Contact;
