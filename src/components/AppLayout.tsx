import avlancheLogo from "@/assets/avlanche-logo-white.webp";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo } from "react";

const AppLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isStudio = location.pathname.startsWith("/studio");

  const direction = useMemo(() => (isStudio ? 1 : -1), [isStudio]);

  const contactHref = isStudio ? "/studio/contact" : "/contact";

  return (
    <div className={`relative h-screen w-screen overflow-hidden flex flex-col ${isStudio ? "studio-theme" : ""}`} role="document">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ backgroundColor: isStudio ? "hsl(35 30% 95%)" : "hsl(0 0% 98%)" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-4 py-4 md:px-10 md:py-8">
        {/* Left — music / studio toggle */}
        <div className="flex items-baseline gap-1 md:gap-2 shrink-0">
          <button
            onClick={() => { if (isStudio) navigate("/"); }}
            className={`text-sm md:text-xl tracking-[0.12em] font-normal transition-all duration-300 cursor-pointer ${
              !isStudio ? "text-foreground" : "text-foreground/30 hover:text-foreground/70"
            }`}
          >
            music
          </button>
          <span className="text-foreground/30 text-[10px] md:text-sm font-light">/</span>
          <button
            onClick={() => { if (!isStudio) navigate("/studio"); }}
            className={`text-sm md:text-xl tracking-[0.12em] font-light transition-all duration-300 cursor-pointer ${
              isStudio ? "text-foreground" : "text-foreground/30 hover:text-foreground/70"
            }`}
            style={isStudio ? { color: "hsl(var(--studio-accent))" } : undefined}
          >
            studio
          </button>
        </div>

        {/* Center — Logo */}
        <a
          href={isStudio ? "/studio" : "/"}
          className="absolute left-1/2 -translate-x-1/2 block"
        >
          <img
            src={avlancheLogo}
            alt="Avlanche"
            className="h-6 md:h-[55px] w-auto brightness-0"
          />
        </a>

        {/* Right — Contact */}
        <a
          href={contactHref}
          className="text-foreground text-sm md:text-base tracking-[0.12em] md:tracking-[0.15em] font-light hover:opacity-70 transition-opacity uppercase shrink-0"
        >
          Contact
        </a>
      </header>

      {/* Content with slide transition */}
      <div className="relative z-10 flex-1 overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isStudio ? "studio" : "music"}
            initial={{ x: `${direction * 100}%`, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: `${-direction * 100}%`, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 flex flex-col"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AppLayout;
