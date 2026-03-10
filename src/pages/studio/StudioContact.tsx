const StudioContact = () => {
  return (
    <div className="flex items-center justify-center h-full px-6">
      <div className="text-foreground font-light tracking-wide space-y-5 text-left max-w-md w-full">
        <h1 className="text-3xl md:text-5xl tracking-tight font-bold mb-8">
          Contact
        </h1>
        <div className="space-y-1 text-base md:text-lg text-foreground/80 leading-relaxed">
          <p className="font-medium text-foreground">Avlanche Studio</p>
          <p>44 rue Jules Vanzuppe</p>
          <p>94200 Ivry-sur-Seine</p>
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
        <div className="pt-6">
          <a
            href="https://www.instagram.com/avlanche.studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center px-8 py-4 rounded-full text-sm md:text-base tracking-wide transition-opacity hover:opacity-80"
            style={{ background: "hsl(35 40% 55%)", color: "hsl(0 0% 100%)" }}
          >
            Suivez-nous sur Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default StudioContact;
