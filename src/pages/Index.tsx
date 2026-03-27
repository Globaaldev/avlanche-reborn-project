import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const ARTISTS = [
  {
    name: "Sherifflazone",
    slug: "sherifflazone",
    videoId: "8av0S63V2SQ", // G-SHOCK
  },
  {
    name: "Louis Marguier",
    slug: "marguier",
    videoId: "Z82wj-jGFmU",
  },
  {
    name: "Magie!",
    slug: "magie",
    videoId: "sYWvDOjUK9w", // MAGIE! clip
  },
];

const Index = () => {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const navigate = useNavigate();

  const hoveredArtist = ARTISTS.find((a) => a.slug === hoveredSlug);

  return (
    <div className="relative flex-1 flex flex-col items-center justify-center overflow-hidden">
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

      {/* Video background on hover */}
      <AnimatePresence>
        {hoveredArtist?.videoId && (
          <motion.div
            key={hoveredArtist.slug}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 pointer-events-none"
          >
            <iframe
              src={`https://www.youtube.com/embed/${hoveredArtist.videoId}?autoplay=1&mute=1&loop=1&playlist=${hoveredArtist.videoId}&controls=0&showinfo=0&modestbranding=1&rel=0&disablekb=1`}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] min-w-[180%] min-h-[180%]"
              allow="autoplay"
              style={{ border: 0 }}
              tabIndex={-1}
            />
            <div className="absolute inset-0 bg-background/10" />
          </motion.div>
        )}
      </AnimatePresence>

      <h1 className="sr-only">Avlanche — Label, Publishing & Studio d'enregistrement</h1>

      {/* Artist names */}
      <nav className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 px-6 w-full" aria-label="Artistes">
        {ARTISTS.map((artist) => (
          <motion.button
            key={artist.slug}
            onClick={() => navigate(`/artistes?tab=${artist.slug}`)}
            onMouseEnter={() => setHoveredSlug(artist.slug)}
            onMouseLeave={() => setHoveredSlug(null)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative text-foreground text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0.08em] uppercase font-black transition-all duration-500 hover:tracking-[0.15em]"
            style={{ fontFamily: 'var(--nav-font)' }}
          >
            <span className={`transition-opacity duration-300 ${hoveredSlug && hoveredSlug !== artist.slug ? 'opacity-20' : 'opacity-100'}`}>
              {artist.name}
            </span>
            <span
              className={`absolute -bottom-1 left-0 right-0 h-[2px] bg-foreground origin-left transition-transform duration-300 ${hoveredSlug === artist.slug ? 'scale-x-100' : 'scale-x-0'}`}
            />
          </motion.button>
        ))}
      </nav>

      {/* SEO hidden text */}
      <p className="sr-only">
        Avlanche est un label de musique indépendant et une maison d'édition musicale basé à Ivry-sur-Seine, dans le Val-de-Marne, à proximité de Paris. Le studio d'enregistrement Avlanche propose des services professionnels d'enregistrement, de mixage et de mastering pour les artistes rap, hip-hop, R&B et pop. Découvrez nos artistes Sherifflazone, Louis Marguier et Magie!.
      </p>
    </div>
  );
};

export default Index;
