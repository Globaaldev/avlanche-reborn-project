import avlancheLogo from "@/assets/avlanche-logo-white.webp";
import avlancheBg from "@/assets/avlanche-bg.jpg";
import { Link, Outlet, useLocation } from "react-router-dom";

const STUDIO_NAV = [
  { label: "ACCUEIL", href: "/studio" },
  { label: "LE STUDIO", href: "/studio/about" },
  { label: "SERVICES & TARIFS", href: "/studio/services" },
  { label: "CONTACT", href: "/studio/contact" },
];

const StudioLayout = () => {
  const location = useLocation();

  return (
    <div className="relative h-screen w-screen bg-background overflow-hidden flex flex-col">
      {/* Background image */}
      <img src={avlancheBg} alt="" className="absolute inset-0 w-full h-full object-cover" />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-5 md:px-10 md:py-8">
        <Link to="/studio" className="block">
          <img
            src={avlancheLogo}
            alt="Avlanche Studio"
            className="h-8 md:h-[55px] w-auto"
          />
        </Link>
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
          <a
            key={item.label}
            href={item.href}
            className={`text-foreground text-xs md:text-sm tracking-[0.2em] font-light hover:opacity-70 transition-opacity uppercase ${
              location.pathname === item.href ? "opacity-100" : "opacity-60"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default StudioLayout;
