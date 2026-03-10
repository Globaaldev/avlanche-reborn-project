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
        <h1 className="text-foreground text-3xl sm:text-4xl md:text-6xl tracking-[0.2em] font-normal uppercase">
          Avlanche Studio
        </h1>
        <p className="text-foreground/80 text-lg md:text-2xl tracking-[0.15em] font-normal max-w-xl mx-auto">
          Studio d'enregistrement, mixage & mastering
        </p>
      </div>
    </div>
  );
};

export default StudioHome;
