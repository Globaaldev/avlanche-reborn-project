import SEOHead from "@/components/SEOHead";

const About = () => {
  return (
    <div className="flex-1 flex items-center justify-center px-6">
      <SEOHead
        title="About — Avlanche"
        description="Avlanche Studio, 44 rue Jules Vanzuppe, 94200 Ivry-sur-Seine. Studio d'enregistrement, mixage et mastering."
        path="/about"
      />
      <div className="text-foreground font-light tracking-wide space-y-6 text-center">
        <h1 className="text-2xl md:text-4xl tracking-[0.15em] uppercase mb-10">
          Avlanche Studio
        </h1>
        <address className="not-italic space-y-1 text-base md:text-lg text-foreground/60 leading-relaxed">
          <p>44 rue Jules Vanzuppe</p>
          <p>94200 Ivry-sur-Seine</p>
        </address>
        <div className="space-y-1 text-base md:text-lg">
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
  );
};

export default About;