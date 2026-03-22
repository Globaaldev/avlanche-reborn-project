import { useState, useRef } from "react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";

const ARTISTS = [
  { name: "Sherifflazone", slug: "sherifflazone" },
  { name: "Louis Marguier", slug: "marguier" },
  { name: "Magie!", slug: "magie" },
];

const Index = () => {
  const [showArtistes, setShowArtistes] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowArtistes(true);
  };
  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setShowArtistes(false), 300);
  };

  return (
    <div className="relative flex-1 flex items-center justify-center">
      <SEOHead
        title="Avlanche — Label, Publishing & Studio d'enregistrement"
        description="Avlanche est un label de musique indépendant, une maison d'édition musicale (publishing) et un studio d'enregistrement professionnel (Rec / Mix / Master) basé à Ivry-sur-Seine, près de Paris."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Avlanche",
          "url": "https://avlanche.fr",
          "description": "Label de musique indépendant, maison d'édition musicale et studio d'enregistrement professionnel à Ivry-sur-Seine.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "44 rue Jules Vanzuppe",
            "addressLocality": "Ivry-sur-Seine",
            "postalCode": "94200",
            "addressCountry": "FR",
          },
          "telephone": "+33142509383",
          "email": "studio@avlanche.fr",
          "sameAs": [
            "https://www.instagram.com/avlanche.studio/",
          ],
        }}
      />
      {/* Central text */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center max-w-2xl px-6"
      >
        <h1 className="sr-only">Avlanche — Label, Publishing & Studio d'enregistrement</h1>
        <p className="text-foreground/60 text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed tracking-wide">
          Production / Edition
        </p>
      </motion.div>

      {/* SEO hidden text */}
      <p className="sr-only">
        Avlanche est un label de musique indépendant et une maison d'édition musicale basé à Ivry-sur-Seine, dans le Val-de-Marne, à proximité de Paris. Le studio d'enregistrement Avlanche propose des services professionnels d'enregistrement, de mixage et de mastering pour les artistes rap, hip-hop, R&B et pop. Découvrez nos artistes Sherifflazone, Louis Marguier et Magie!.
      </p>

      {/* Bottom Navigation */}
      <nav
        className="absolute bottom-0 left-0 right-0 flex items-center justify-center px-6 py-5 md:px-10 md:py-8"
        aria-label="Artistes"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <a
            href="/artistes"
            className="story-link text-red-500 text-base md:text-xl tracking-[0.2em] font-semibold transition-all duration-300 uppercase hover:tracking-[0.35em]"
          >
            ARTISTES
          </a>
          <div
            className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 flex flex-col items-center gap-1 transition-all duration-200 ${
              showArtistes ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
            }`}
          >
            {ARTISTS.map((artist) => (
              <a
                key={artist.slug}
                href={`/artistes?tab=${artist.slug}`}
                className="text-foreground text-sm md:text-base tracking-[0.15em] font-semibold hover:opacity-70 transition-opacity py-1 whitespace-nowrap"
              >
                {artist.name}
              </a>
            ))}
          </div>
        </motion.div>
      </nav>
    </div>
  );
};

export default Index;
