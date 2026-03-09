const StudioContact = () => {
  return (
    <div className="flex items-center justify-center h-full px-6">
      <div className="text-foreground font-light tracking-wide space-y-6 text-center">
        <h1 className="text-2xl md:text-4xl tracking-[0.15em] uppercase mb-10">
          Contact Studio
        </h1>
        <div className="space-y-1 text-sm md:text-base text-foreground/60 leading-relaxed">
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
  );
};

export default StudioContact;
