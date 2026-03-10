import SEOHead from "@/components/SEOHead";

const StudioHome = () => {
  return (
    <div className="flex items-center justify-center h-full px-6">
      <SEOHead
        title="Avlanche Studio — Enregistrement, Mixage & Mastering"
        description="Avlanche Studio, studio d'enregistrement, de mixage et de mastering à Ivry-sur-Seine. Réservez votre session."
        path="/studio"
      />
      <div className="text-center space-y-4">
        <h1 className="text-foreground text-2xl sm:text-3xl md:text-6xl tracking-[0.2em] font-light uppercase">
          Avlanche Studio
        </h1>
        <p className="text-foreground/70 text-base md:text-xl tracking-[0.15em] font-light max-w-xl mx-auto">
          Studio d'enregistrement, mixage & mastering
        </p>
      </div>
    </div>
  );
};

export default StudioHome;