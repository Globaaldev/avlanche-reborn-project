import studioConsole from "@/assets/studio-console.jpg";
import studioSalon from "@/assets/studio-salon.jpg";
import studioCabine from "@/assets/studio-cabine.png";

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
    <div className="space-y-0">
      {items.map((item, i) => (
        <div
          key={i}
          className="text-foreground/80 text-xs md:text-sm font-light tracking-wide py-2.5 border-b border-foreground/[0.06]"
        >
          {item}
        </div>
      ))}
    </div>
  </div>
);

const StudioAbout = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 py-10 md:py-16 space-y-20 md:space-y-28 max-w-6xl mx-auto">
      {/* Header */}
      <div className="space-y-6 max-w-2xl">
        <h1 className="text-foreground text-3xl md:text-5xl tracking-[0.15em] font-light uppercase">
          Le Studio
        </h1>
        <p className="text-foreground/70 text-sm md:text-base font-light leading-relaxed tracking-wide">
          Un studio moderne et chaleureux, conçu pour créer dans les meilleures conditions. Une équipe passionnée et du matériel haut de gamme pour donner vie à vos projets musicaux.
        </p>
      </div>

      {/* Two photos side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="overflow-hidden rounded-md">
          <img
            src={studioConsole}
            alt="Console d'enregistrement Avlanche Studio"
            className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="overflow-hidden rounded-md">
          <img
            src={studioSalon}
            alt="Espace détente du studio"
            className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      {/* Cabine section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="overflow-hidden rounded-md">
          <img
            src={studioCabine}
            alt="Cabine d'enregistrement"
            className="w-full h-72 md:h-96 object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="space-y-6 text-center md:text-left">
          <p className="text-foreground text-lg md:text-2xl tracking-[0.1em] font-light">
            Profitez de la spacieuse cabine&nbsp;!
          </p>
          <a
            href="https://avlanchestudio.simplybook.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-foreground/40 text-foreground text-xs md:text-sm tracking-[0.2em] font-light uppercase px-8 py-3 hover:bg-foreground hover:text-background transition-colors duration-300 rounded-sm"
          >
            Je réserve ma session
          </a>
        </div>
      </div>

      {/* Fiche technique */}
      <div>
        <h2 className="text-foreground text-xl md:text-3xl tracking-[0.15em] font-light uppercase mb-12 md:mb-16">
          Fiche technique
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-20 md:gap-y-16">
          <EquipmentSection title="Hardware" items={EQUIPMENT.hardware} />
          <EquipmentSection title="Micros" items={EQUIPMENT.micros} />
          <EquipmentSection title="Enceintes" items={EQUIPMENT.enceintes} />
          <EquipmentSection title="Claviers" items={EQUIPMENT.claviers} />
        </div>
      </div>

      {/* Ils nous ont fait confiance */}
      <div>
        <h2 className="text-foreground text-xl md:text-3xl tracking-[0.15em] font-light uppercase mb-8">
          Ils nous ont fait confiance
        </h2>
        <p className="text-foreground/50 text-sm md:text-base font-light leading-relaxed tracking-wide max-w-3xl italic">
          {TRUSTED_BY}
        </p>
      </div>

      {/* Playlist CTA */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-10">
        <a
          href="https://open.spotify.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-foreground/40 text-foreground text-xs md:text-sm tracking-[0.2em] font-light uppercase px-8 py-3 hover:bg-foreground hover:text-background transition-colors duration-300 rounded-sm"
        >
          Rec / Mix by Avlanche
        </a>
        <span className="text-foreground/30 text-xs tracking-wide font-light">
          Découvrez la playlist des morceaux enregistrés par Avlanche
        </span>
      </div>
    </div>
  );
};

export default StudioAbout;
