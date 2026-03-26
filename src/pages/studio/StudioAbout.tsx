import studioConsole from "@/assets/studio-console.jpg";
import studioSalon from "@/assets/studio-salon.jpg";
import studioCabine from "@/assets/studio-cabine.png";
import SEOHead from "@/components/SEOHead";
import AnimatedSection from "@/components/AnimatedSection";
import ScrollReveal from "@/components/ScrollReveal";

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

const TRUSTED_BY = "Théodora, Hamza, Niska, Meryl, BbTrickz, LaMano, Morad, Tiakola, Leto, Zed, Jeune Morty, Louis Marguier, LaFève, Sherifflazone, J9ueve, Guy2Bezbar, Khali, Sofiane Pamart, Solalune, Ange, Nonolagrinta, Mojisboy, Lennie, Aupinard, Jeune Lion, Romsii, Rex Kudo, Jolagreen, 1pliké140, Jäde, Yvnis, Asinine, Bekar et bien d'autres...";

const EquipmentSection = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h4 className="text-foreground/50 text-sm md:text-base tracking-[0.15em] uppercase mb-4 md:mb-6 font-semibold">
      {title}
    </h4>
    <ul className="space-y-0">
      {items.map((item, i) => (
        <li
          key={i}
          className="text-foreground text-sm sm:text-base md:text-lg font-semibold tracking-wide py-2.5 border-b border-foreground/[0.08]"
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
        title="Le Studio — Avlanche Studio d'enregistrement"
        description="Avlanche Studio : studio d'enregistrement professionnel à Ivry-sur-Seine. Cabine acoustique, régie équipée Neve, Neumann U87, TubeTech. Enregistrement, mixage et mastering hip-hop, rap, R&B."
        path="/studio/about"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Avlanche Studio",
          "url": "https://avlanche.fr/studio/about",
          "description": "Studio d'enregistrement professionnel à Ivry-sur-Seine, spécialisé en rap, hip-hop et R&B. Équipement haut de gamme Neve, Neumann, TubeTech.",
          "image": studioConsole,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "44 rue Jules Vanzuppe",
            "addressLocality": "Ivry-sur-Seine",
            "postalCode": "94200",
            "addressCountry": "FR",
          },
        }}
      />
      {/* CTA rapide */}
      <AnimatedSection>
        <section className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-foreground text-3xl sm:text-4xl md:text-5xl tracking-[0.06em] font-semibold uppercase">
              Le Studio
            </h1>
            <p className="text-foreground/70 text-base sm:text-lg md:text-xl font-semibold leading-relaxed tracking-wide max-w-xl">
              Enregistrement, mixage & mastering à Ivry-sur-Seine.
            </p>
          </div>
          <a
            href="https://avlanchestudio.simplybook.me"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-foreground text-sm sm:text-base tracking-[0.15em] uppercase font-semibold pb-0.5 border-b border-foreground/40 hover:border-foreground transition-colors duration-300"
          >
            Réserver une session →
          </a>
        </section>
      </AnimatedSection>

      {/* Description + Photos */}
      <ScrollReveal>
        <section className="space-y-10">
          <p className="text-foreground/70 text-base sm:text-lg md:text-xl font-semibold leading-relaxed tracking-wide max-w-2xl">
            Un studio d'enregistrement moderne et chaleureux, conçu pour créer dans les meilleures conditions. Avlanche Studio offre un environnement professionnel idéal pour l'enregistrement, le mixage et le mastering.
          </p>

          {/* Photo grid */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 md:gap-4">
            <div className="sm:col-span-7 overflow-hidden rounded-xl">
              <img
                src={studioConsole}
                alt="Console d'enregistrement professionnelle Avlanche Studio Ivry-sur-Seine"
                loading="eager"
                className="w-full h-48 sm:h-72 md:h-[22rem] object-cover rounded-xl hover:scale-[1.02] transition-transform duration-1000"
              />
            </div>
            <div className="sm:col-span-5 flex flex-row sm:flex-col gap-3 md:gap-4">
              <div className="overflow-hidden rounded-xl flex-1">
                <img
                  src={studioSalon}
                  alt="Espace détente du studio d'enregistrement"
                  loading="lazy"
                  className="w-full h-28 sm:h-full object-cover hover:scale-[1.02] transition-transform duration-1000"
                />
              </div>
              <div className="overflow-hidden rounded-xl flex-1">
                <img
                  src={studioCabine}
                  alt="Cabine d'enregistrement acoustique Avlanche Studio"
                  loading="lazy"
                  className="w-full h-28 sm:h-full object-cover hover:scale-[1.02] transition-transform duration-1000"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* La Cabine */}
      <ScrollReveal>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="overflow-hidden rounded-xl">
            <img
              src={studioCabine}
              alt="Cabine d'enregistrement insonorisée Avlanche Studio"
              loading="lazy"
              className="w-full h-64 sm:h-80 md:h-[28rem] object-cover hover:scale-[1.02] transition-transform duration-1000"
            />
          </div>
          <div className="space-y-4">
             <h2 className="text-foreground text-2xl md:text-4xl tracking-[0.06em] font-semibold uppercase">
              La Cabine
            </h2>
            <p className="text-foreground/70 text-base sm:text-lg md:text-xl font-semibold leading-relaxed tracking-wide">
              Notre cabine d'enregistrement offre une isolation acoustique optimale pour des prises de voix et d'instruments d'une qualité irréprochable. Traitée avec des matériaux professionnels, elle garantit un son pur et précis, sans coloration ni résonance indésirable.
            </p>
            <p className="text-foreground/50 text-sm sm:text-base font-semibold leading-relaxed tracking-wide">
              Équipée d'un Neumann U87 et d'un préampli Neve 1073SPX, la chaîne d'enregistrement assure un rendu chaleureux et détaillé, parfait pour le rap, le chant, les voix off et les instruments acoustiques.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <section className="flex flex-col items-center text-center space-y-6">
          <p className="text-foreground text-xl md:text-3xl tracking-[0.06em] font-semibold">
            Réservez votre session
          </p>
          <a
            href="https://avlanchestudio.simplybook.me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 text-base tracking-[0.15em] uppercase hover:text-foreground transition-colors duration-300 pb-0.5 border-b border-foreground/20 hover:border-foreground/60"
          >
            Réserver →
          </a>
        </section>
      </ScrollReveal>

      {/* Fiche technique */}
      <ScrollReveal>
        <section>
          <h2 className="text-foreground text-2xl md:text-4xl tracking-[0.06em] font-semibold uppercase mb-12 md:mb-16">
            Fiche technique
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-x-20 md:gap-y-16">
            <EquipmentSection title="Hardware" items={EQUIPMENT.hardware} />
            <EquipmentSection title="Micros" items={EQUIPMENT.micros} />
            <EquipmentSection title="Enceintes" items={EQUIPMENT.enceintes} />
            <EquipmentSection title="Claviers" items={EQUIPMENT.claviers} />
          </div>
        </section>
      </ScrollReveal>

      {/* Confiance */}
      <ScrollReveal>
        <section>
          <h2 className="text-foreground text-2xl md:text-4xl tracking-[0.06em] font-semibold uppercase mb-8">
            Ils nous ont fait confiance
          </h2>
          <p className="text-foreground/60 text-base sm:text-lg md:text-xl font-semibold leading-relaxed tracking-wide max-w-3xl">
            {TRUSTED_BY}
          </p>
        </section>
      </ScrollReveal>

      {/* Playlist */}
      <ScrollReveal>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pb-10">
          <a
            href="https://open.spotify.com/playlist/55u3EWt0s5yhOYKErSs1Ym?si=eglYBa-cQ_6YtubNo6O-Jg&nd=1&dlsi=15b96a1c9c3345e2"
            className="text-foreground/70 text-base md:text-lg tracking-[0.15em] uppercase hover:text-foreground transition-colors duration-300 pb-0.5 border-b border-foreground/30 hover:border-foreground/60"
          >
            Rec / Mix by Avlanche
          </a>
          <span className="text-foreground/50 text-sm sm:text-base tracking-wide font-semibold">
            — Playlist des morceaux enregistrés par Avlanche
          </span>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default StudioAbout;
