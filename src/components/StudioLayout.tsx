import { Link, Outlet, useLocation } from "react-router-dom";

const STUDIO_NAV = [
  { label: "LE STUDIO", href: "/studio/about" },
  { label: "SERVICES & TARIFS", href: "/studio/services" },
];

const StudioLayout = () => {
  const location = useLocation();

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>

      {/* Bottom Navigation */}
      <nav className="flex items-center justify-between px-6 py-5 md:px-10 md:py-8">
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
