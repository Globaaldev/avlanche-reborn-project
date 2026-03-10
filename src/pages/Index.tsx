import avlancheLogo from "@/assets/avlanche-logo-white.webp";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const ARTISTS = [
  { name: "Sherifflazone", slug: "sherifflazone" },
  { name: "Marguier", slug: "marguier" },
  { name: "Magie!", slug: "magie" },
];

const Index = () => {
  const [showArtistes, setShowArtistes] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowArtistes(true);
  };
  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setShowArtistes(false), 300);
  };

  return (
    <div className="relative h-screen w-screen bg-background overflow-hidden flex items-center justify-center">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-5 md:px-10 md:py-8">
        <div className="flex items-baseline gap-0">
          <a href="/" className="block shrink-0">
            <img
              src={avlancheLogo}
              alt="Avlanche"
              className="h-6 md:h-[55px] w-auto brightness-0"
            />
          </a>
          <div className="flex items-baseline gap-1 md:gap-2 ml-0.5 md:ml-1">
            <span className="text-foreground text-xs md:text-xl tracking-[0.12em] font-light">
              music
            </span>
            <span className="text-foreground/25 text-[8px] md:text-sm font-light">/</span>
            <button
              onClick={() => navigate("/studio")}
              className="text-foreground/25 text-xs md:text-xl tracking-[0.12em] font-light cursor-pointer transition-all duration-300 hover:text-foreground/70"
            >
              studio
            </button>
          </div>
        </div>
        <a
          href="/contact"
          className="text-foreground text-xs md:text-base tracking-[0.15em] font-light hover:opacity-70 transition-opacity uppercase"
        >
          Contact
        </a>
      </header>

      {/* Central text */}
      <div className="text-center max-w-2xl px-6">
        <p className="text-foreground/50 text-sm md:text-lg font-light leading-relaxed tracking-wide">
          Avlanche est un label de musique, une maison d'édition et un studio d'enregistrement, de mixage et de mastering.
        </p>
      </div>

      {/* Bottom Navigation */}
      <nav className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-5 md:px-10 md:py-8">
        <div
          className="relative"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <a
            href="/artistes"
            className="text-foreground text-xs md:text-sm tracking-[0.2em] font-light hover:opacity-70 transition-opacity uppercase"
          >
            ARTISTES
          </a>
          <div
            className={`absolute bottom-full left-0 mb-3 flex flex-col gap-1 transition-all duration-200 ${
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

        <a
          href="/about"
          className="text-foreground text-xs md:text-sm tracking-[0.2em] font-light hover:opacity-70 transition-opacity uppercase"
        >
          ABOUT
        </a>
      </nav>
    </div>
  );
};

export default Index;
