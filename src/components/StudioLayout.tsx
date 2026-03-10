import avlancheLogo from "@/assets/avlanche-logo-white.webp";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const STUDIO_NAV = [
  { label: "ACCUEIL", href: "/studio" },
  { label: "LE STUDIO", href: "/studio/about" },
  { label: "SERVICES & TARIFS", href: "/studio/services" },
  { label: "CONTACT", href: "/studio/contact" },
];

const StudioLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="studio-theme relative h-screen w-screen bg-background overflow-hidden flex flex-col">
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-5 md:px-10 md:py-8">
        <div className="flex items-baseline gap-0">
          <Link to="/studio" className="block shrink-0">
            <img
              src={avlancheLogo}
              alt="Avlanche"
              className="h-6 md:h-[55px] w-auto brightness-0"
            />
          </Link>
          <div className="flex items-baseline gap-1 md:gap-2 ml-0.5 md:ml-1">
            <button
              onClick={() => navigate("/")}
              className="text-foreground/25 text-xs md:text-xl tracking-[0.12em] font-light cursor-pointer transition-all duration-300 hover:text-foreground/70"
            >
              music
            </button>
            <span className="text-foreground/25 text-[8px] md:text-sm font-light">/</span>
            <span
              className="text-xs md:text-xl tracking-[0.12em] font-light cursor-default"
              style={{ color: "hsl(var(--studio-accent))" }}
            >
              studio
            </span>
          </div>
        </div>
        <span className="text-foreground/60 text-xs md:text-sm tracking-[0.2em] font-light uppercase">
          Studio
        </span>
      </header>

      {/* Content */}
      <div className="relative z-10 flex-1 overflow-y-auto">
        <Outlet />
      </div>

      {/* Bottom Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 md:px-10 md:py-8">
        {STUDIO_NAV.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.label}
              to={item.href}
              className={`text-xs md:text-sm tracking-[0.2em] font-light hover:opacity-70 transition-all uppercase ${
                isActive ? "opacity-100" : "text-foreground opacity-50"
              }`}
              style={isActive ? { color: "hsl(var(--studio-accent))" } : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default StudioLayout;
