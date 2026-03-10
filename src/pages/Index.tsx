import { useState, useRef } from "react";
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
      />
      {/* Central text */}
      <div className="text-center max-w-2xl px-6">
        <p className="text-foreground/50 text-base md:text-lg font-light leading-relaxed tracking-wide">
          Avlanche est un label de musique, une maison d'édition et un studio d'enregistrement, de mixage et de mastering.
        </p>
      </div>

      {/* Bottom Navigation */}
      <nav className="absolute bottom-0 left-0 right-0 flex items-center justify-center px-6 py-5 md:px-10 md:py-8">
        <div
          className="relative"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <a
            href="/artistes"
            className="story-link text-red-500 text-xs md:text-sm tracking-[0.2em] font-light transition-all duration-300 uppercase hover:tracking-[0.35em]"
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
                className="text-foreground text-xs md:text-sm tracking-[0.15em] font-light hover:opacity-70 transition-opacity py-1 whitespace-nowrap"
              >
                {artist.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Index;