const StudioAbout = () => {
  return (
    <div className="flex items-center justify-center h-full px-6 md:px-20">
      <div className="max-w-2xl space-y-8 text-center">
        <h1 className="text-foreground text-2xl md:text-4xl tracking-[0.15em] font-light uppercase">
          Le Studio
        </h1>
        <div className="space-y-4 text-foreground/70 text-sm md:text-base font-light leading-relaxed tracking-wide">
          <p>
            Situé à Ivry-sur-Seine, Avlanche Studio est un espace de création dédié à la musique urbaine et aux nouvelles sonorités.
          </p>
          <p>
            Équipé de matériel professionnel haut de gamme, le studio offre un environnement optimal pour l'enregistrement, le mixage et le mastering.
          </p>
          <p>
            Notre équipe d'ingénieurs du son accompagne les artistes à chaque étape de leur projet, de la pré-production à la finalisation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudioAbout;
