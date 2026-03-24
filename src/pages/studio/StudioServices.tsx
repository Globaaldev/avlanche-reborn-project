import SEOHead from "@/components/SEOHead";
import AnimatedSection from "@/components/AnimatedSection";
import ScrollReveal from "@/components/ScrollReveal";

const StudioServices = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 py-10 md:py-16 space-y-20 md:space-y-28 max-w-6xl mx-auto">
      <SEOHead
        title="Tarifs Enregistrement, Mixage & Mastering — Avlanche Studio"
        description="Tarifs studio d'enregistrement Avlanche : enregistrement dès 45€/h, mix 350€, master 70€. Packs Single et EP disponibles. Studio professionnel à Ivry-sur-Seine."
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
          "description": "Enregistrement, mixage et mastering professionnels. Packs Single et EP à Ivry-sur-Seine.",
        }}
      />
      {/* Header */}
      <AnimatedSection>
        <div>
          <h1 className="text-foreground text-2xl sm:text-3xl md:text-5xl tracking-[0.06em] font-semibold uppercase">
            Grille Tarifaire
          </h1>
          <div className="mt-4 space-y-1">
            <p className="text-foreground/50 text-xs sm:text-sm tracking-[0.1em] uppercase">
              Tous les prix sont affichés hors taxes
            </p>
            <p className="text-foreground/50 text-xs sm:text-sm tracking-[0.1em] uppercase">
              Jour : entre 12h et 20h / Nuit : entre 20h et 8h
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Tarifs — layout matching reference */}
      <ScrollReveal>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Left block: Enregistrement + Mix + Master */}
          <div className="border border-foreground/[0.1] rounded-md p-5 sm:p-6 md:p-8 space-y-6">
            <div>
               <h3 className="text-foreground text-base sm:text-lg md:text-xl tracking-[0.1em] uppercase font-semibold mb-3">
                Enregistrement
              </h3>
              <p className="text-foreground/70 text-sm sm:text-base md:text-lg">45€/h le jour</p>
              <p className="text-foreground/70 text-sm sm:text-base md:text-lg">55€/h la nuit</p>
            </div>
            <div>
               <h3 className="text-foreground text-base sm:text-lg md:text-xl tracking-[0.1em] uppercase font-semibold mb-3">
                Mix
              </h3>
              <p className="text-foreground/70 text-sm sm:text-base md:text-lg">350€ par titre</p>
            </div>
            <div>
               <h3 className="text-foreground text-base sm:text-lg md:text-xl tracking-[0.1em] uppercase font-semibold mb-3">
                Master
              </h3>
              <p className="text-foreground/70 text-sm sm:text-base md:text-lg">70€ par titre</p>
            </div>
          </div>

          {/* Right block: Forfaits */}
          <div className="border border-foreground/[0.1] rounded-md p-5 sm:p-6 md:p-8">
            <div className="space-y-0">
              {[
                ["Demi-journée (4h)", "170€"],
                ["Demi-soirée (4h)", "210€"],
                ["Journée (8h)", "320€"],
                ["Soirée (8h)", "400€"],
              ].map(([label, price]) => (
                <div key={label} className="flex justify-between text-foreground text-sm sm:text-base md:text-lg font-normal tracking-wide py-3 border-b border-foreground/[0.08] last:border-b-0">
                  <span>{label}</span>
                  <span className="text-foreground ml-4 shrink-0">{price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Packs */}
      <ScrollReveal>
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {[
              {
                name: "Pack Single Jour",
                description: "5h d'enregistrement / Mix / Master",
                total: "600€",
              },
              {
                name: "Pack Single Nuit",
                description: "5h d'enregistrement / Mix / Master",
                total: "650€",
              },
              {
                name: "Pack 5 Titres Jour",
                description: "5h d'enregistrement / Mix / Master",
                total: "3150€",
              },
              {
                name: "Pack 5 Titres Nuit",
                description: "5h d'enregistrement / Mix / Master",
                total: "3450€",
              },
            ].map((pack) => (
              <div key={pack.name} className="border border-foreground/[0.1] rounded-md p-4 sm:p-5 md:p-8 flex justify-between items-center hover:border-foreground/25 transition-colors duration-300">
                <div>
                  <h4 className="text-foreground text-sm sm:text-base md:text-lg tracking-[0.12em] uppercase font-normal">
                    {pack.name}
                  </h4>
                  <p className="text-foreground/50 text-xs sm:text-sm tracking-wide mt-1">
                    {pack.description}
                  </p>
                </div>
                <span className="text-foreground text-lg sm:text-xl md:text-2xl font-normal tracking-wide ml-4 shrink-0">{pack.total}</span>
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
            className="text-foreground/60 text-base tracking-[0.15em] uppercase hover:text-foreground transition-colors duration-300 pb-0.5 border-b border-foreground/20 hover:border-foreground/60"
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
              <p className="font-medium text-foreground/60 mb-1">Conception & Hébergement</p>
              <p>Ce site a été conçu et est hébergé par Globaaaal Agency.</p>
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
