import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const SITES = [
  { label: "Avlanche Music", href: "/", match: (p: string) => !p.startsWith("/studio") },
  { label: "Avlanche Studio", href: "/studio", match: (p: string) => p.startsWith("/studio") },
];

interface SiteSwitcherProps {
  logoSrc: string;
  variant?: "light" | "dark";
}

const SiteSwitcher = ({ logoSrc, variant = "dark" }: SiteSwitcherProps) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isDark = variant === "dark";

  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen(!open)} className="block cursor-pointer group">
        <img
          src={logoSrc}
          alt="Avlanche"
          className="h-8 md:h-[55px] w-auto transition-opacity group-hover:opacity-70"
          style={isDark ? undefined : { filter: "invert(1)" }}
        />
      </button>

      {open && (
        <div
          className="absolute top-full left-0 mt-4 min-w-[220px] overflow-hidden animate-fade-in"
          style={{
            background: isDark
              ? "linear-gradient(135deg, hsla(0,0%,8%,0.95), hsla(0,0%,12%,0.9))"
              : "linear-gradient(135deg, hsla(0,0%,98%,0.95), hsla(0,0%,94%,0.9))",
            backdropFilter: "blur(20px)",
            border: `1px solid ${isDark ? "hsla(0,0%,100%,0.08)" : "hsla(0,0%,0%,0.08)"}`,
          }}
        >
          {SITES.map((site) => {
            const isActive = site.match(location.pathname);
            return (
              <Link
                key={site.label}
                to={site.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-4 transition-all duration-200"
                style={{
                  color: isDark
                    ? isActive ? "hsl(0,0%,100%)" : "hsl(0,0%,100%,0.45)"
                    : isActive ? "hsl(0,0%,0%)" : "hsl(0,0%,0%,0.4)",
                  background: isActive
                    ? isDark ? "hsla(0,0%,100%,0.06)" : "hsla(0,0%,0%,0.04)"
                    : "transparent",
                  letterSpacing: "0.2em",
                  fontSize: "0.7rem",
                  fontWeight: 300,
                  textTransform: "uppercase" as const,
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = isDark ? "hsla(0,0%,100%,0.04)" : "hsla(0,0%,0%,0.03)";
                    e.currentTarget.style.color = isDark ? "hsl(0,0%,100%,0.8)" : "hsl(0,0%,0%,0.7)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = isDark
                      ? "hsl(0,0%,100%,0.45)"
                      : "hsl(0,0%,0%,0.4)";
                  }
                }}
              >
                {site.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SiteSwitcher;
