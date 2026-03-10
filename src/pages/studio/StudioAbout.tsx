import studioConsole from "@/assets/studio-console.jpg";
import studioSalon from "@/assets/studio-salon.jpg";
import studioCabine from "@/assets/studio-cabine.png";
import SEOHead from "@/components/SEOHead";

const EQUIPMENT = {
  hardware: [
    "Lynx Studio Aurora (n) 16 TB3",
    "Neve 1073SPX • EQ Préamplificateur micro analogique et égaliseur",
    "TubeTech CL1B Compresseur Mono à lampes / Analogique",
    "Spl MixDream XP Totaliseur Analogique compact",
  ],
  enceintes: [
    "Adam Audio S3H",
    "Focal Shape 65",
  ],
  micros: [
    "Neumann U87",
    "Lauten Audio Eden LT-386",
    "Rode NT5 MP",
  ],
  claviers: [
    "Arturia Polybrute",
    "Komplete Kontrol S49",
    "Korg MicroKORG",
    "Piano droit Wurlitzer",
  ],
};

const TRUSTED_BY = "LaFève, Niska, Meryl, BbTrickz, Theodora, Skuna, LaMano, Morad, Zequin, Louis Marguier, Sherifflazone, J9ueve, Malo, TyFontaine, Guy2Bezbar, Leto, Khali, DMS, Zed, Sofiane Pamart, Sonny Rave et bien d'autres !";

const EquipmentSection = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h4 className="text-foreground/30 text-[10px] md:text-xs tracking-[0.3em] uppercase mb-4 md:mb-6 font-light">
      {title}
    </h4>
    <ul className="space-y-0">
      {items.map((item, i) => (
        <li
          key={i}
          className="text-foreground/80 text-xs md:text-sm font-light tracking-wide py-2.5 border-b border-foreground/[0.06]"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const StudioAbout = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 py-10 md:py-16 space-y-24 md:space-y-32 max-w-6xl mx-auto">
      <SEOHead
        title="Le Studio — Avlanche Studio"
        description="Découvrez Avlanche Studio : équipement haut de gamme, cabine d'enregistrement, salon et espace de création à Ivry-sur-Seine."
        path="/studio/about"
      />
      {/* Hero */}
      <section className="space-y-10">
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-foreground text-2xl sm:text-3xl md:text-5xl tracking-[0.15em] font-light uppercase">
            Le Studio
          </h1>
          <p className="text-foreground/50 text-sm md:text-base font-light leading-relaxed tracking-wide">
            Un studio moderne et chaleureux, conçu pour créer dans les meilleures conditions.
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 md:gap-4">
          <div className="sm:col-span-7 overflow-hidden rounded-xl">
            <img
              src={studioConsole}
              alt="Console d'enregistrement Avlanche Studio"
              loading="eager"
              className="w-full h-56 sm:h-72 md:h-[28rem] object-cover hover:scale-[1.02] transition-transform duration-1000"
            />
          </div>
          <div className="sm:col-span-5 flex flex-row sm:flex-col gap-3 md:gap-4">
            <div className="overflow-hidden rounded-xl flex-1">
              <img
                src={studioSalon}
                alt="Espace détente du studio"
                loading="lazy"
                className="w-full h-36 sm:h-full object-cover hover:scale-[1.02] transition-transform duration-1000"
              />
            </div>
            <div className="overflow-hidden rounded-xl flex-1">
              <img
                src={studioCabine}
                alt="Cabine d'enregistrement"
                loading="lazy"
                className="w-full h-36 sm:h-full object-cover hover:scale-[1.02] transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="flex flex-col items-center text-center space-y-6">
        <p className="text-foreground text-lg md:text-2xl tracking-[0.1em] font-light">
          Réservez votre session
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

      {/* Fiche technique */}
      <section>
        <h2 className="text-foreground text-xl md:text-3xl tracking-[0.15em] font-light uppercase mb-12 md:mb-16">
          Fiche technique
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-x-20 md:gap-y-16">
          <EquipmentSection title="Hardware" items={EQUIPMENT.hardware} />
          <EquipmentSection title="Micros" items={EQUIPMENT.micros} />
          <EquipmentSection title="Enceintes" items={EQUIPMENT.enceintes} />
          <EquipmentSection title="Claviers" items={EQUIPMENT.claviers} />
        </div>
      </section>

      {/* Confiance */}
      <section>
        <h2 className="text-foreground text-xl md:text-3xl tracking-[0.15em] font-light uppercase mb-8">
          Ils nous ont fait confiance
        </h2>
        <p className="text-foreground/40 text-sm md:text-base font-light leading-relaxed tracking-wide max-w-3xl">
          {TRUSTED_BY}
        </p>
      </section>

      {/* Playlist */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pb-10">
        <a
          href="https://open.spotify.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/30 text-xs tracking-[0.25em] uppercase hover:text-foreground/70 transition-colors duration-300 pb-0.5 border-b border-foreground/10 hover:border-foreground/40"
        >
          Rec / Mix by Avlanche
        </a>
        <span className="text-foreground/20 text-xs tracking-wide font-light">
          — Playlist des morceaux enregistrés par Avlanche
        </span>
      </div>
    </div>
  );
};

export default StudioAbout;