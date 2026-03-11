import SEOHead from "@/components/SEOHead";
import AnimatedSection from "@/components/AnimatedSection";

const StudioHome = () => {
  return (
    <div className="flex items-center justify-center h-full px-6">
      <SEOHead
        title="Avlanche Studio — Enregistrement, Mixage & Mastering"
        description="Avlanche Studio, studio d'enregistrement, de mixage et de mastering à Ivry-sur-Seine. Réservez votre session."
        path="/studio"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Avlanche Studio",
          "url": "https://avlanche.fr/studio",
          "description": "Studio d'enregistrement, mixage et mastering à Ivry-sur-Seine.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "44 rue Jules Vanzuppe",
            "addressLocality": "Ivry-sur-Seine",
            "postalCode": "94200",
            "addressCountry": "FR",
          },
          "telephone": "+33155533136",
          "email": "studio@avlanche.fr",
          "priceRange": "€€",
        }}
      />
      <AnimatedSection>
        <div className="text-center space-y-4">
          <h1 className="text-foreground text-3xl sm:text-4xl md:text-6xl tracking-[0.2em] font-normal uppercase">
            Avlanche Studio
          </h1>
          <p className="text-foreground/80 text-base sm:text-lg md:text-2xl tracking-[0.15em] font-normal max-w-xl mx-auto">
            Studio d'enregistrement, mixage & mastering
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default StudioHome;
