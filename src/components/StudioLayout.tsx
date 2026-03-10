import avlancheLogo from "@/assets/avlanche-logo-white.webp";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const STUDIO_NAV = [
  { label: "ACCUEIL", href: "/studio" },
  { label: "LE STUDIO", href: "/studio/about" },
  { label: "SERVICES & TARIFS", href: "/studio/services" },
  { label: "CONTACT", href: "/studio/contact" },
];

const SITES = [
  { label: "Avlanche Music", href: "/" },
  { label: "Avlanche Studio", href: "/studio" },
];

/** Animated equalizer bars */
const EqualizerBars = () => {
  return (
    <div className="absolute inset-0 flex items-end justify-center gap-[3px] opacity-[0.04] pointer-events-none overflow-hidden pb-20">
      {Array.from({ length: 48 }).map((_, i) => (
        <div
          key={i}
          className="w-[2px] md:w-[3px] rounded-full bg-foreground"
          style={{
            height: "20%",
            animation: `eq-bar ${0.8 + Math.random() * 1.2}s ease-in-out ${Math.random() * 0.5}s infinite alternate`,
          }}
        />
      ))}
    </div>
  );
};

const StudioLayout = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden flex flex-col"
      style={{
        background: "linear-gradient(160deg, hsl(0 0% 4%) 0%, hsl(0 0% 8%) 40%, hsl(30 8% 10%) 70%, hsl(0 0% 4%) 100%)",
      }}
    >
      {/* Equalizer animation */}
      <EqualizerBars />

      {/* Subtle radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(35 30% 50%) 0%, transparent 70%)" }}
      />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-5 md:px-10 md:py-8">
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="block cursor-pointer"
          >
            <img
              src={avlancheLogo}
              alt="Avlanche"
              className="h-8 md:h-[55px] w-auto hover:opacity-80 transition-opacity"
            />
          </button>

          {/* Site switcher dropdown */}
          {menuOpen && (
            <div className="absolute top-full left-0 mt-3 bg-card/95 backdrop-blur-md border border-border/30 rounded-sm overflow-hidden animate-fade-in min-w-[200px]">
              {SITES.map((site) => {
                const isActive =
                  site.href === "/studio"
                    ? location.pathname.startsWith("/studio")
                    : !location.pathname.startsWith("/studio");
                return (
                  <Link
                    key={site.label}
                    to={site.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-5 py-3 text-xs tracking-[0.2em] font-light uppercase transition-colors ${
                      isActive
                        ? "text-foreground bg-foreground/10"
                        : "text-foreground/50 hover:text-foreground hover:bg-foreground/5"
                    }`}
                  >
                    {site.label}
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        <span className="text-foreground text-xs md:text-sm tracking-[0.2em] font-light uppercase opacity-60">
          Studio
        </span>
      </header>

      {/* Content */}
      <div className="relative z-10 flex-1 overflow-y-auto">
        <Outlet />
      </div>

      {/* Bottom Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 md:px-10 md:py-8">
        {STUDIO_NAV.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className={`text-foreground text-xs md:text-sm tracking-[0.2em] font-light hover:opacity-70 transition-opacity uppercase ${
              location.pathname === item.href ? "opacity-100" : "opacity-60"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Equalizer keyframes */}
      <style>{`
        @keyframes eq-bar {
          0% { height: 8%; }
          100% { height: 60%; }
        }
      `}</style>
    </div>
  );
};

export default StudioLayout;
