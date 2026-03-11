import SEOHead from "@/components/SEOHead";
import AnimatedSection from "@/components/AnimatedSection";

const StudioContact = () => {
  return (
    <div className="flex items-center justify-center h-full px-6">
      <SEOHead
        title="Contact — Avlanche Studio"
        description="Contactez Avlanche Studio : 44 rue Jules Vanzuppe, 94200 Ivry-sur-Seine. Email: studio@avlanche.fr."
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
          <h1 className="text-2xl sm:text-3xl md:text-5xl tracking-[0.15em] uppercase mb-10">
            Contact
          </h1>
          <address className="not-italic space-y-1 text-base md:text-lg text-foreground/60 leading-relaxed">
            <p className="text-foreground">Avlanche Studio</p>
            <p>44 rue Jules Vanzuppe</p>
            <p>94200 Ivry-sur-Seine</p>
          </address>
          <div className="space-y-1 text-base md:text-lg">
            <p>
              <a href="mailto:studio@avlanche.fr" className="text-foreground hover:opacity-70 transition-opacity">
                studio@avlanche.fr
              </a>
            </p>
            <p>
              <a href="tel:+33155533136" className="text-foreground hover:opacity-70 transition-opacity underline">
                01 55 53 31 36
              </a>
            </p>
          </div>
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
