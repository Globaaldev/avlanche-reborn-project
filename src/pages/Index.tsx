import avlancheLogo from "@/assets/avlanche-logo-white.webp";

const NAV_ITEMS = [
  { label: "ARTISTES", href: "/artistes" },
  { label: "ABOUT", href: "/about" },
  { label: "STUDIO", href: "https://avlanchestudio.fr", external: true },
];

const Index = () => {
  return (
    <div className="relative h-screen w-screen bg-background overflow-hidden">
      {/* Background video placeholder - will be replaced with actual video */}
      <div className="absolute inset-0 bg-background" />

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-5 md:px-10 md:py-8">
        <a href="/" className="block">
          <img
            src={avlancheLogo}
            alt="Avlanche Logo"
            className="h-10 md:h-[70px] w-auto"
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
        {NAV_ITEMS.map((item) => (
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
