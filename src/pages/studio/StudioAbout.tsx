import studioConsole from "@/assets/studio-console.jpg";
import studioSalon from "@/assets/studio-salon.jpg";
import studioCabine from "@/assets/studio-cabine.png";

const StudioAbout = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 py-10 md:py-16 space-y-16 max-w-6xl mx-auto">
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
        <div className="overflow-hidden rounded-sm">
          <img
            src={studioConsole}
            alt="Console d'enregistrement Avlanche Studio"
            className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="overflow-hidden rounded-sm">
          <img
            src={studioSalon}
            alt="Espace détente du studio"
            className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      {/* Cabine section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="overflow-hidden rounded-sm">
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
            className="inline-block border border-foreground/40 text-foreground text-xs md:text-sm tracking-[0.2em] font-light uppercase px-8 py-3 hover:bg-foreground hover:text-background transition-colors duration-300"
          >
            Je réserve ma session
          </a>
        </div>
      </div>
    </div>
  );
};

export default StudioAbout;
