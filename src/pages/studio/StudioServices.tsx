const SERVICES = [
  {
    title: "Enregistrement",
    description: "Sessions d'enregistrement voix et instruments dans une cabine traitée acoustiquement.",
    price: "À partir de 50€/h",
  },
  {
    title: "Mixage",
    description: "Mixage professionnel de vos titres pour un rendu radio-ready.",
    price: "À partir de 150€/titre",
  },
  {
    title: "Mastering",
    description: "Mastering haute qualité pour toutes les plateformes de streaming.",
    price: "À partir de 80€/titre",
  },
  {
    title: "Production",
    description: "Création de beats et arrangements sur mesure pour vos projets.",
    price: "Sur devis",
  },
];

const StudioServices = () => {
  return (
    <div className="flex items-center justify-center h-full px-6 md:px-20">
      <div className="max-w-3xl w-full space-y-10 text-center">
        <h1 className="text-foreground text-2xl md:text-4xl tracking-[0.15em] font-light uppercase">
          Services & Tarifs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="border border-foreground/20 p-6 space-y-3 backdrop-blur-sm bg-background/30"
            >
              <h2 className="text-foreground text-lg md:text-xl tracking-[0.1em] font-light uppercase">
                {service.title}
              </h2>
              <p className="text-foreground/60 text-sm font-light leading-relaxed">
                {service.description}
              </p>
              <p className="text-foreground text-sm md:text-base tracking-[0.1em] font-light">
                {service.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudioServices;
