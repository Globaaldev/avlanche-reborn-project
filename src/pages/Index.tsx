import avlancheLogo from "@/assets/avlanche-logo-white.webp";
import avlancheBg from "@/assets/avlanche-bg.jpg";
import { useState } from "react";

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
  { label: "STUDIO", href: "https://avlanchestudio.fr", external: true },
];

const Index = () => {
  const [hoverArtistes, setHoverArtistes] = useState(false);

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
          onMouseEnter={() => setHoverArtistes(true)}
          onMouseLeave={() => setHoverArtistes(false)}
        >
          <a
            href="/artistes"
            className="text-foreground text-xs md:text-sm tracking-[0.2em] font-light hover:opacity-70 transition-opacity uppercase"
          >
            ARTISTES
          </a>

          {/* Hover dropdown */}
          <div
            className={`absolute bottom-full left-0 mb-3 bg-background/90 backdrop-blur-md border border-border px-5 py-4 min-w-[200px] transition-all duration-200 ${
              hoverArtistes ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
            }`}
          >
            {ARTISTS.map((artist) => (
              <div key={artist.slug} className="mb-3 last:mb-0">
                <a
                  href={`/artistes#${artist.slug}`}
                  className="text-foreground text-xs md:text-sm tracking-[0.15em] font-light hover:opacity-70 transition-opacity block mb-1"
                >
                  {artist.name}
                </a>
                <div className="flex gap-3 pl-2">
                  {SUB_CATEGORIES.map((cat) => (
                    <a
                      key={cat.section}
                      href={`/artistes#${artist.slug}`}
                      className="text-muted-foreground text-[10px] md:text-xs tracking-wider hover:text-foreground transition-colors"
                    >
                      {cat.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {NAV_ITEMS.filter((i) => i.label !== "ARTISTES").map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
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
