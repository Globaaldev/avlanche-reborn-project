import { useState, useRef } from "react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";

const ARTISTS = [
  { name: "Sherifflazone", slug: "sherifflazone" },
  { name: "Marguier", slug: "marguier" },
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
        title="Avlanche — Label, Édition & Studio"
        description="Avlanche est un label de musique, une maison d'édition et un studio d'enregistrement, de mixage et de mastering à Ivry-sur-Seine."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Avlanche",
          "url": "https://avlanche.fr",
          "description": "Label de musique, maison d'édition et studio d'enregistrement à Ivry-sur-Seine.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "44 rue Jules Vanzuppe",
            "addressLocality": "Ivry-sur-Seine",
            "postalCode": "94200",
            "addressCountry": "FR",
          },
          "telephone": "+33155533136",
          "email": "studio@avlanche.fr",
        }}
      />
      {/* Central text */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center max-w-2xl px-6"
      >
        <h1 className="sr-only">Avlanche — Label, Édition & Studio</h1>
        <p className="text-foreground/60 text-lg sm:text-xl md:text-2xl font-light leading-relaxed tracking-wide">
          Avlanche est un label de musique, une maison d'édition et un studio d'enregistrement, de mixage et de mastering.
        </p>
      </motion.div>

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
            className="story-link text-red-500 text-base md:text-xl tracking-[0.2em] font-light transition-all duration-300 uppercase hover:tracking-[0.35em]"
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
                className="text-foreground text-sm md:text-base tracking-[0.15em] font-light hover:opacity-70 transition-opacity py-1 whitespace-nowrap"
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
