import avlancheLogo from "@/assets/avlanche-logo-white.webp";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-screen bg-background overflow-hidden flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-5 md:px-10 md:py-8">
        <div className="flex items-baseline gap-0">
          <a href="/" className="block shrink-0">
            <img
              src={avlancheLogo}
              alt="Avlanche"
              className="h-6 md:h-[55px] w-auto brightness-0"
            />
          </a>
          <div className="flex items-baseline gap-1 md:gap-2 ml-0.5 md:ml-1">
            <span className="text-foreground text-xs md:text-xl tracking-[0.12em] font-light">
              music
            </span>
            <span className="text-foreground/25 text-[8px] md:text-sm font-light">/</span>
            <button
              onClick={() => navigate("/studio")}
              className="text-foreground/25 text-xs md:text-xl tracking-[0.12em] font-light cursor-pointer transition-all duration-300 hover:text-foreground/70"
            >
              studio
            </button>
          </div>
        </div>
        <a
          href="/contact"
          className="text-foreground text-xs md:text-base tracking-[0.15em] font-light hover:opacity-70 transition-opacity uppercase"
        >
          Contact
        </a>
      </header>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-foreground font-light tracking-wide space-y-6 text-center">
          <h1 className="text-2xl md:text-4xl tracking-[0.15em] uppercase mb-10">
            Avlanche Studio
          </h1>
          <div className="space-y-1 text-sm md:text-base text-foreground/50 leading-relaxed">
            <p>44 rue Jules Vanzuppe</p>
            <p>94200 Ivry-sur-Seine</p>
          </div>
          <div className="space-y-1 text-sm md:text-base">
            <p>
              <a href="mailto:studio@avlanche.fr" className="text-foreground hover:opacity-70 transition-opacity">
                studio@avlanche.fr
              </a>
            </p>
            <p>
              <a href="tel:+33155533136" className="text-foreground hover:opacity-70 transition-opacity underline">
                01 55 53 31 36
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="flex items-center justify-between px-6 py-5 md:px-10 md:py-8">
        <a href="/artistes" className="text-foreground text-xs md:text-sm tracking-[0.2em] font-light hover:opacity-70 transition-opacity uppercase">ARTISTES</a>
        <a href="/about" className="text-foreground text-xs md:text-sm tracking-[0.2em] font-light hover:opacity-70 transition-opacity uppercase">ABOUT</a>
      </nav>
    </div>
  );
};

export default About;
