import avlancheLogo from "@/assets/avlanche-logo-white.webp";
import avlancheBg from "@/assets/avlanche-bg.jpg";
import { useState, useRef } from "react";

const ARTISTS = [
  { name: "Sherifflazone", slug: "sherifflazone" },
  { name: "Marguier", slug: "marguier" },
  { name: "Magie!", slug: "magie" },
];

const SUB_CATEGORIES = [
  { label: "Photos de presse", section: "photos" },
  { label: "Plateformes", section: "linktree" },
  { label: "Clips", section: "clips" },
];

const NAV_ITEMS = [
  { label: "ARTISTES", href: "/artistes" },
  { label: "ABOUT", href: "/about" },
  { label: "STUDIO", href: "/studio" },
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
    <div className="relative h-screen w-screen bg-background overflow-hidden">
      {/* Background image */}
      <img src={avlancheBg} alt="" className="absolute inset-0 w-full h-full object-cover" />

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-5 md:px-10 md:py-8">
        <a href="/" className="block">
          <img
            src={avlancheLogo}
            alt="Avlanche Logo"
            className="h-8 md:h-[55px] w-auto"
          />
        </a>
        <a
          href="/contact"
          className="text-foreground text-sm md:text-base tracking-[0.15em] font-light hover:opacity-70 transition-opacity uppercase"
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
            className="text-foreground text-xs md:text-sm tracking-[0.2em] font-light hover:opacity-70 transition-opacity uppercase"
          >
            ARTISTES
          </a>

          {/* Hover dropdown — no container, just names */}
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

        {NAV_ITEMS.filter((i) => i.label !== "ARTISTES").map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-foreground text-xs md:text-sm tracking-[0.2em] font-light hover:opacity-70 transition-opacity uppercase"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Index;
