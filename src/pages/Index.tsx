import avlancheLogo from "@/assets/avlanche-logo-white.webp";
import { useState, useRef } from "react";

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
  const [showSwitch, setShowSwitch] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const switchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowArtistes(true);
  };
  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setShowArtistes(false), 300);
  };
  const handleSwitchEnter = () => {
    if (switchTimeoutRef.current) clearTimeout(switchTimeoutRef.current);
    setShowSwitch(true);
  };
  const handleSwitchLeave = () => {
    switchTimeoutRef.current = setTimeout(() => setShowSwitch(false), 300);
  };

  return (
    <div
      className="relative h-screen w-screen overflow-hidden"
      style={{
        background: "linear-gradient(160deg, hsl(0 0% 96%) 0%, hsl(0 0% 92%) 40%, hsl(30 4% 90%) 70%, hsl(0 0% 94%) 100%)",
      }}
    >
      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }}
      />

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-5 md:px-10 md:py-8">
        <div className="flex items-center gap-0">
          <a href="/" className="block">
            <img
              src={avlancheLogo}
              alt="Avlanche"
              className="h-8 md:h-[55px] w-auto"
              style={{ filter: "invert(1)" }}
            />
          </a>
          <div
            className="relative"
            onMouseEnter={handleSwitchEnter}
            onMouseLeave={handleSwitchLeave}
          >
            <span
              className="text-sm md:text-lg tracking-[0.1em] font-light cursor-default select-none"
              style={{ color: "hsl(0 0% 15%)" }}
            >
              -music
            </span>
            {/* Switch to studio */}
            <a
              href="/studio"
              className={`absolute top-full left-0 mt-1 whitespace-nowrap text-sm md:text-lg tracking-[0.1em] font-light transition-all duration-200 ${
                showSwitch
                  ? "opacity-60 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-1 pointer-events-none"
              }`}
              style={{ color: "hsl(0 0% 15%)" }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.6"; }}
            >
              -studio
            </a>
          </div>
        </div>
        <a
          href="/contact"
          className="text-sm md:text-base tracking-[0.15em] font-light hover:opacity-70 transition-opacity uppercase"
          style={{ color: "hsl(0 0% 15%)" }}
        >
          Contact
        </a>
      </header>

      {/* Bottom Navigation */}
      <nav className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-5 md:px-10 md:py-8">
        {/* ARTISTES with hover menu */}
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
