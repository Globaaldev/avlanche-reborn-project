import avlancheLogo from "@/assets/avlanche-logo-white.webp";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useRef } from "react";

const STUDIO_NAV = [
  { label: "ACCUEIL", href: "/studio" },
  { label: "LE STUDIO", href: "/studio/about" },
  { label: "SERVICES & TARIFS", href: "/studio/services" },
  { label: "CONTACT", href: "/studio/contact" },
];

const EqualizerBars = () => (
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

const StudioLayout = () => {
  const location = useLocation();
  const [showSwitch, setShowSwitch] = useState(false);
  const switchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSwitchEnter = () => {
    if (switchTimeoutRef.current) clearTimeout(switchTimeoutRef.current);
    setShowSwitch(true);
  };
  const handleSwitchLeave = () => {
    switchTimeoutRef.current = setTimeout(() => setShowSwitch(false), 300);
  };

  return (
    <div
      className="relative h-screen w-screen overflow-hidden flex flex-col"
      style={{
        background: "linear-gradient(160deg, hsl(0 0% 4%) 0%, hsl(0 0% 8%) 40%, hsl(30 8% 10%) 70%, hsl(0 0% 4%) 100%)",
      }}
    >
      <EqualizerBars />

      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(35 30% 50%) 0%, transparent 70%)" }}
      />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-5 md:px-10 md:py-8">
        <div className="flex items-center gap-0">
          <Link to="/studio" className="block">
            <img
              src={avlancheLogo}
              alt="Avlanche"
              className="h-8 md:h-[55px] w-auto"
            />
          </Link>
          <div
            className="relative"
            onMouseEnter={handleSwitchEnter}
            onMouseLeave={handleSwitchLeave}
          >
            <span
              className="text-foreground text-sm md:text-lg tracking-[0.1em] font-light cursor-default select-none"
            >
              -studio
            </span>
            {/* Switch to music */}
            <Link
              to="/"
              className={`absolute top-full left-0 mt-1 whitespace-nowrap text-foreground text-sm md:text-lg tracking-[0.1em] font-light transition-all duration-200 ${
                showSwitch
                  ? "opacity-60 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-1 pointer-events-none"
              }`}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.6"; }}
            >
              -music
            </Link>
          </div>
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
