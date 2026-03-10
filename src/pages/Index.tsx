import avlancheLogo from "@/assets/avlanche-logo-white.webp";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const ARTISTS = [
  { name: "Sherifflazone", slug: "sherifflazone" },
  { name: "Marguier", slug: "marguier" },
  { name: "Magie!", slug: "magie" },
];

const NAV_ITEMS = [
  { label: "ARTISTES", href: "/artistes" },
  { label: "ABOUT", href: "/about" },
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
    <div
      className="relative h-screen w-screen overflow-hidden"
      style={{
        background: "linear-gradient(160deg, hsl(0 0% 96%) 0%, hsl(0 0% 92%) 40%, hsl(30 4% 90%) 70%, hsl(0 0% 94%) 100%)",
      }}
    >
      {/* Subtle grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }}
      />

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-5 md:px-10 md:py-8">
        <div className="flex items-center">
          <a href="/" className="block shrink-0">
            <img
              src={avlancheLogo}
              alt="Avlanche"
              className="h-6 md:h-[55px] w-auto"
              style={{ filter: "invert(1)" }}
            />
          </a>
          <div className="flex flex-col ml-1 md:ml-2 leading-none">
            <span
              className="text-[10px] md:text-base tracking-[0.12em] font-light cursor-default"
              style={{ color: "hsl(0 0% 10%)" }}
            >
              music
            </span>
            <button
              onClick={() => navigate("/studio")}
              className="text-[10px] md:text-base tracking-[0.12em] font-light text-left cursor-pointer transition-all duration-300 hover:tracking-[0.18em]"
              style={{ color: "hsl(0 0% 10% / 0.3)" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "hsl(0 0% 10% / 0.7)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "hsl(0 0% 10% / 0.3)"; }}
            >
              studio
            </button>
          </div>
        </div>
        <a
          href="/contact"
          className="text-xs md:text-base tracking-[0.15em] font-light hover:opacity-70 transition-opacity uppercase"
          style={{ color: "hsl(0 0% 15%)" }}
        >
          Contact
        </a>
      </header>

      {/* Bottom Navigation */}
      <nav className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-5 md:px-10 md:py-8">
        <div
          className="relative"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <a
            href="/artistes"
            className="text-xs md:text-sm tracking-[0.2em] font-light hover:opacity-70 transition-opacity uppercase"
            style={{ color: "hsl(0 0% 15%)" }}
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
                className="text-xs md:text-sm tracking-[0.15em] font-light hover:opacity-70 transition-opacity py-1 whitespace-nowrap"
                style={{ color: "hsl(0 0% 15%)" }}
              >
                {artist.name}
              </a>
            ))}
          </div>
        </div>

        {NAV_ITEMS.filter((i) => i.label !== "ARTISTES").map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-xs md:text-sm tracking-[0.2em] font-light hover:opacity-70 transition-opacity uppercase"
            style={{ color: "hsl(0 0% 15%)" }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Index;
