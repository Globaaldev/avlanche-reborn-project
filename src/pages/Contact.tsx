import avlancheLogo from "@/assets/avlanche-logo-white.webp";

const Contact = () => {
  return (
    <div className="relative h-screen w-screen bg-background overflow-hidden flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-5 md:px-10 md:py-8">
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

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-foreground font-light tracking-wide space-y-6 text-center">
          <h1 className="text-2xl md:text-4xl tracking-[0.15em] uppercase mb-10">
            Avlanche Studio
          </h1>
          <div className="space-y-1 text-sm md:text-base text-muted-foreground leading-relaxed">
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
              <a href="tel:+33155533136" className="text-foreground hover:opacity-70 transition-opacity">
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
        <a href="https://avlanchestudio.fr" target="_blank" rel="noopener noreferrer" className="text-foreground text-xs md:text-sm tracking-[0.2em] font-light hover:opacity-70 transition-opacity uppercase">STUDIO</a>
      </nav>
    </div>
  );
};

export default Contact;
