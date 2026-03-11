import SEOHead from "@/components/SEOHead";
import AnimatedSection from "@/components/AnimatedSection";
import ScrollReveal from "@/components/ScrollReveal";

const StudioServices = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 py-10 md:py-16 space-y-20 md:space-y-28 max-w-6xl mx-auto">
      <SEOHead
        title="Services & Tarifs — Avlanche Studio"
        description="Tarifs d'enregistrement, mixage et mastering chez Avlanche Studio. Packs Single et EP disponibles."
        path="/studio/services"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Services Avlanche Studio",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Avlanche Studio",
          },
          "url": "https://avlanche.fr/studio/services",
          "description": "Enregistrement, mixage et mastering. Packs Single et EP.",
        }}
      />
      {/* Header */}
      <AnimatedSection>
        <div>
          <h1 className="text-foreground text-2xl sm:text-3xl md:text-5xl tracking-[0.15em] font-normal uppercase">
            Services & Tarifs
          </h1>
        </div>
      </AnimatedSection>

      {/* Tarifs */}
      <ScrollReveal>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {/* Enregistrement */}
          <div>
            <h3 className="text-foreground text-lg sm:text-xl md:text-2xl tracking-[0.1em] font-normal mb-6">
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
                <div key={label} className="flex justify-between text-foreground text-sm sm:text-base md:text-lg font-normal tracking-wide py-3 border-b border-foreground/[0.08]">
                  <span>{label}</span>
                  <span className="text-foreground ml-4 shrink-0">{price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mix */}
          <div>
            <h3 className="text-foreground text-lg sm:text-xl md:text-2xl tracking-[0.1em] font-normal mb-6">
              Mix
            </h3>
            <div className="flex justify-between text-foreground text-sm sm:text-base md:text-lg font-normal tracking-wide py-3 border-b border-foreground/[0.08]">
              <span>Par titre</span>
              <span className="text-foreground">350€</span>
            </div>
          </div>

          {/* Master */}
          <div>
            <h3 className="text-foreground text-lg sm:text-xl md:text-2xl tracking-[0.1em] font-normal mb-6">
              Master
            </h3>
            <div className="flex justify-between text-foreground text-sm sm:text-base md:text-lg font-normal tracking-wide py-3 border-b border-foreground/[0.08]">
              <span>Par titre</span>
              <span className="text-foreground">70€</span>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Packs */}
      <ScrollReveal>
        <section>
          <h2 className="text-foreground text-xl sm:text-2xl md:text-4xl tracking-[0.15em] font-normal uppercase mb-12 md:mb-16">
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
              <div key={pack.name} className="border border-foreground/[0.1] rounded-md p-4 sm:p-5 md:p-8 space-y-4 hover:border-foreground/25 transition-colors duration-300">
                <h4 className="text-foreground text-sm sm:text-base md:text-lg tracking-[0.25em] uppercase font-normal">
                  {pack.name}
                </h4>
                <div className="space-y-0">
                  {pack.items.map(([label, price]) => (
                    <div key={label} className="flex justify-between text-foreground/80 text-sm sm:text-base md:text-lg font-normal py-2">
                      <span>{label}</span>
                      <span className="text-foreground/60 ml-4 shrink-0">{price}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-foreground/[0.08]">
                  <span className="text-foreground text-lg sm:text-xl md:text-3xl font-normal tracking-wide">{pack.total}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Note + CTA */}
      <ScrollReveal>
        <section className="flex flex-col items-center text-center space-y-6 pb-10">
          <p className="text-foreground/60 text-sm sm:text-base md:text-lg font-normal leading-relaxed tracking-wide max-w-2xl">
            Pour toute demande concernant les forfaits, séminaires, tournages, releases & listening parties, veuillez nous contacter par mail ou téléphone.
          </p>
          <a
            href="https://avlanchestudio.simplybook.me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 text-base tracking-[0.25em] uppercase hover:text-foreground transition-colors duration-300 pb-0.5 border-b border-foreground/20 hover:border-foreground/60"
          >
            Réserver →
          </a>
        </section>
      </ScrollReveal>

      {/* Mentions légales */}
      <section className="border-t border-foreground/[0.08] pt-8 pb-4">
        <details className="group">
          <summary className="text-foreground/30 text-xs tracking-[0.15em] uppercase cursor-pointer hover:text-foreground/50 transition-colors duration-300 select-none">
            Mentions légales
          </summary>
          <div className="mt-6 text-foreground/50 text-xs sm:text-sm leading-relaxed space-y-4 max-w-3xl">
            <div>
              <p className="font-medium text-foreground/60 mb-1">Éditeur du site</p>
              <p>AVLANCHE MUSIC — Société par actions simplifiée (SAS)</p>
              <p>44 rue Jules Vanzuppe, 94200 Ivry-sur-Seine, France</p>
              <p>SIREN : 898 534 151 — SIRET : 898 534 151 00011</p>
              <p>N° TVA : FR13 898 534 151</p>
              <p>Directeur de la publication : Nathan-Meyer Kassabi</p>
            </div>
            <div>
              <p className="font-medium text-foreground/60 mb-1">Activité</p>
              <p>Enregistrement sonore et édition musicale (NAF 5920Z)</p>
              <p>Date de création : 22 avril 2021</p>
            </div>
            <div>
              <p className="font-medium text-foreground/60 mb-1">Hébergement</p>
              <p>Ce site est hébergé par Lovable (https://lovable.dev).</p>
            </div>
            <div>
              <p className="font-medium text-foreground/60 mb-1">Propriété intellectuelle</p>
              <p>L'ensemble du contenu de ce site (textes, images, logos, vidéos) est protégé par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable.</p>
            </div>
            <div>
              <p className="font-medium text-foreground/60 mb-1">Données personnelles</p>
              <p>Ce site ne collecte aucune donnée personnelle sans votre consentement. Pour toute question relative à vos données, contactez-nous à l'adresse indiquée sur la page Contact.</p>
            </div>
          </div>
        </details>
      </section>
    </div>
  );
};

export default StudioServices;
