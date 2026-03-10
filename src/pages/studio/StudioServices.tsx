import SEOHead from "@/components/SEOHead";

const StudioServices = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 py-10 md:py-16 space-y-20 md:space-y-28 max-w-6xl mx-auto">
      <SEOHead
        title="Services & Tarifs — Avlanche Studio"
        description="Tarifs d'enregistrement, mixage et mastering chez Avlanche Studio. Packs Single et EP disponibles."
        path="/studio/services"
      />
      {/* Header */}
      <div>
        <h1 className="text-foreground text-2xl sm:text-3xl md:text-5xl tracking-[0.15em] font-light uppercase">
          Services & Tarifs
        </h1>
      </div>

      {/* Tarifs */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
        {/* Enregistrement */}
        <div>
          <h3 className="text-foreground text-lg md:text-xl tracking-[0.1em] font-light mb-6">
            Enregistrement
          </h3>
          <div className="space-y-0">
            {[
              ["Journée (12h – 20h)", "45€/h"],
              ["Nuit (20h – 8h)", "55€/h"],
              ["Demi-journée (4h)", "170€"],
              ["Demi-soirée (4h)", "210€"],
              ["Journée (8h)", "320€"],
              ["Soirée (8h)", "400€"],
            ].map(([label, price]) => (
              <div key={label} className="flex justify-between text-foreground/80 text-sm md:text-base font-light tracking-wide py-3 border-b border-foreground/[0.06]">
                <span>{label}</span>
                <span className="text-foreground/90">{price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mix */}
        <div>
          <h3 className="text-foreground text-lg md:text-xl tracking-[0.1em] font-light mb-6">
            Mix
          </h3>
          <div className="flex justify-between text-foreground/70 text-xs md:text-sm font-light tracking-wide py-3 border-b border-foreground/[0.06]">
            <span>Par titre</span>
            <span className="text-foreground/90">350€</span>
          </div>
        </div>

        {/* Master */}
        <div>
          <h3 className="text-foreground text-base md:text-lg tracking-[0.1em] font-light mb-6">
            Master
          </h3>
          <div className="flex justify-between text-foreground/70 text-xs md:text-sm font-light tracking-wide py-3 border-b border-foreground/[0.06]">
            <span>Par titre</span>
            <span className="text-foreground/90">70€</span>
          </div>
        </div>
      </section>

      {/* Packs */}
      <section>
        <h2 className="text-foreground text-xl md:text-3xl tracking-[0.15em] font-light uppercase mb-12 md:mb-16">
          Packs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {[
            {
              name: "Pack Single Jour",
              items: [["5h d'enregistrement", "225€"], ["Mix", "350€"], ["Master", "70€"]],
              total: "600€",
            },
            {
              name: "Pack Single Nuit",
              items: [["5h d'enregistrement", "275€"], ["Mix", "350€"], ["Master", "70€"]],
              total: "650€",
            },
            {
              name: "Pack EP 5 Titres Jour",
              items: [["30h d'enregistrement", "1 350€"], ["5 Mixs", "1 750€"], ["Master", "350€"]],
              total: "3 150€",
            },
            {
              name: "Pack EP 5 Titres Nuit",
              items: [["30h d'enregistrement", "1 650€"], ["5 Mixs", "1 750€"], ["Master", "350€"]],
              total: "3 450€",
            },
          ].map((pack) => (
            <div key={pack.name} className="border border-foreground/[0.08] rounded-md p-5 md:p-8 space-y-4 hover:border-foreground/20 transition-colors duration-300">
              <h4 className="text-foreground text-xs md:text-sm tracking-[0.25em] uppercase font-light">
                {pack.name}
              </h4>
              <div className="space-y-0">
                {pack.items.map(([label, price]) => (
                  <div key={label} className="flex justify-between text-foreground/60 text-xs md:text-sm font-light py-2">
                    <span>{label}</span>
                    <span className="text-foreground/40">{price}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2 border-t border-foreground/[0.06]">
                <span className="text-foreground text-lg md:text-2xl font-light tracking-wide">{pack.total}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Note + CTA */}
      <section className="flex flex-col items-center text-center space-y-6 pb-10">
        <p className="text-foreground/40 text-xs md:text-sm font-light leading-relaxed tracking-wide max-w-2xl">
          Pour toute demande concernant les forfaits, séminaires, tournages, releases & listening parties, veuillez nous contacter par mail ou téléphone.
        </p>
        <a
          href="https://avlanchestudio.simplybook.me"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/40 text-xs tracking-[0.25em] uppercase hover:text-foreground transition-colors duration-300 pb-0.5 border-b border-foreground/20 hover:border-foreground/60"
        >
          Réserver →
        </a>
      </section>
    </div>
  );
};

export default StudioServices;