import SEOHead from "@/components/SEOHead";
import AnimatedSection from "@/components/AnimatedSection";

const StudioContact = () => {
  return (
    <div className="flex items-center justify-center h-full px-6">
      <SEOHead
        title="Contact — Avlanche Studio"
        description="Contactez Avlanche Studio pour réserver votre session d'enregistrement, mixage ou mastering. Marie-Soleil Fabrègues : marie-soleil@avlanche.fr. 44 rue Jules Vanzuppe, 94200 Ivry-sur-Seine."
        path="/studio/contact"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Avlanche Studio",
          "url": "https://avlanche.fr/studio/contact",
        }}
      />
      <AnimatedSection>
        <div className="text-foreground font-normal tracking-wide space-y-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl tracking-[0.1em] uppercase mb-10">
            Contact
          </h1>
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
          <address className="not-italic space-y-1 text-base md:text-lg text-foreground/40 leading-relaxed">
            <p>Avlanche Studio</p>
            <p>44 rue Jules Vanzuppe</p>
            <p>94200 Ivry-sur-Seine</p>
          </address>
          <div className="pt-4">
            <a
              href="https://www.instagram.com/avlanche.studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/40 text-sm tracking-[0.2em] uppercase hover:text-foreground/60 transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default StudioContact;
