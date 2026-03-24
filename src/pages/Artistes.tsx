import { ExternalLink } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VideoGrid from "@/components/VideoGrid";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";
import sherifflazoneProfile from "@/assets/sherifflazone-profile.png";
import sheriffPress1 from "@/assets/sheriff-press-1.jpg";
import sheriffPress2 from "@/assets/sheriff-press-2.jpg";
import sheriffPress3 from "@/assets/sheriff-press-3.jpg";
import sheriffPress4 from "@/assets/sheriff-press-4.jpg";
import sheriffPress5 from "@/assets/sheriff-press-5.jpg";
import sheriffPress6 from "@/assets/sheriff-press-6.jpg";
import sheriffPress7 from "@/assets/sheriff-press-7.jpeg";
import sheriffPress8 from "@/assets/sheriff-press-8.jpeg";
import sheriffPress9 from "@/assets/sheriff-press-9.jpg";
import magieProfile from "@/assets/magie-profile.png";
import magiePress1 from "@/assets/magie-press-1.jpg";
import magiePress2 from "@/assets/magie-press-2.png";
import magiePress3 from "@/assets/magie-press-3.png";
import marguierProfile from "@/assets/marguier-profile-square.png";

const ARTISTS = [
  {
    name: "Sherifflazone",
    slug: "sherifflazone",
    linktree: "https://linktr.ee/sherifflazone",
    profileImage: sherifflazoneProfile,
    bio: "Originaire de la région parisienne, Sherifflazone s'impose comme l'une des voix les plus singulières de sa génération. Entre mélodies entêtantes et textes incisifs, il façonne un univers musical à la croisée du rap et de la pop urbaine. Signé chez Avlanche, il enchaîne les projets et les collaborations, affirmant un style reconnaissable entre mille.",
    clips: [
      { title: "G-SHOCK", url: "https://www.youtube.com/watch?v=8av0S63V2SQ" },
      { title: "JUMPIN JACK", url: "https://www.youtube.com/watch?v=ii65vUN6y3A" },
      { title: "NEMO", url: "https://www.youtube.com/watch?v=UU1AgwnReLQ" },
      { title: "NO BAP", url: "https://www.youtube.com/watch?v=BSyfY7J_Jpk" },
      { title: "SHERIFF", url: "https://www.youtube.com/watch?v=zetv9yg5wHA" },
      { title: "FUTURAMA", url: "https://www.youtube.com/watch?v=XZYCpI5fs5k" },
      { title: "Dans ma bulle", url: "https://www.youtube.com/watch?v=Lhx2llMul6g" },
    ],
    photos: [sheriffPress9, sheriffPress1, sheriffPress2, sheriffPress3, sheriffPress4, sheriffPress5, sheriffPress6, sheriffPress7, sheriffPress8],
    photoCredits: "Photos N&B : @aveuglance",
  },
  {
    name: "Louis Marguier",
    slug: "marguier",
    linktree: "https://linktr.ee/marguier",
    profileImage: marguierProfile,
    bio: "Louis Marguier cultive un art de la nuance, entre productions ciselées et textes introspectifs. Artiste en développement chez Avlanche, il prépare ses premières sorties avec une exigence rare. Son univers, aussi intime que cinématographique, promet de marquer durablement le paysage musical français.",
    clips: [] as { title: string; url: string }[],
    photos: [] as string[],
    photoCredits: "",
  },
  {
    name: "Magie!",
    slug: "magie",
    linktree: "https://linktr.ee/magie",
    profileImage: magieProfile,
    bio: "Magie! incarne une énergie brute et une créativité débordante. Avec un sens aigu de la mélodie et des productions audacieuses, cet artiste Avlanche explore les frontières entre rap, électro et musique expérimentale. Chaque morceau est une invitation à plonger dans un univers sonore unique et envoûtant.",
    clips: [
      { title: "MAGIE! - Clip", url: "https://www.youtube.com/watch?v=sYWvDOjUK9w" },
    ],
    photos: [magiePress1, magiePress2, magiePress3],
    photoCredits: "Photos : @emiebrg",
  },
];

const contentVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

const Artistes = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || ARTISTS[0].slug;
  const activeArtist = ARTISTS.find((a) => a.slug === activeTab) || ARTISTS[0];
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <div className="relative flex-1 flex flex-col overflow-y-auto">
      <SEOHead
        title={`${activeArtist.name} — Avlanche Artistes`}
        description={`Découvrez ${activeArtist.name}, artiste du label Avlanche. Clips vidéo, photos et biographie. Label indépendant basé à Ivry-sur-Seine.`}
        path="/artistes"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "MusicGroup",
          "name": activeArtist.name,
          "url": `https://avlanche.fr/artistes?tab=${activeArtist.slug}`,
          "description": activeArtist.bio,
        }}
      />
      {/* Artist Tabs — sticky */}
      <div className="sticky top-0 z-30 bg-background">
        <nav className="flex gap-6 sm:gap-8 md:gap-12 px-6 md:px-10 pt-2 pb-0 overflow-x-auto scrollbar-hide" aria-label="Artistes">
          {ARTISTS.map((artist) => (
            <button
              key={artist.slug}
              onClick={() => {
                setSearchParams({ tab: artist.slug });
                setPlayingId(null);
              }}
              className={`text-xs sm:text-sm md:text-base tracking-[0.2em] uppercase font-semibold transition-all duration-300 pb-3 relative whitespace-nowrap ${
                activeTab === artist.slug
                  ? "text-foreground"
                  : "text-foreground/30 hover:text-foreground/60"
              }`}
              aria-current={activeTab === artist.slug ? "page" : undefined}
            >
              {artist.name}
              {activeTab === artist.slug && (
                <motion.span
                  layoutId="artist-tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-foreground"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>
        <div className="mx-6 md:mx-10 h-[1px] bg-foreground/10" role="separator" />
      </div>

      {/* Active Artist Content */}
      <AnimatePresence mode="wait">
        <motion.main
          key={activeArtist.slug}
          variants={contentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex-1 px-6 md:px-10 py-8 sm:py-10 md:py-16 pb-32"
        >
          {/* Header: Profile + Name */}
          {/* Hero: full-width profile image with gradient fade */}
          {activeArtist.profileImage && (
            <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] -mx-6 md:-mx-10 mb-8 sm:mb-10 md:mb-14 overflow-hidden">
              <img
                src={activeArtist.profileImage}
                alt={`Photo de profil de ${activeArtist.name}`}
                className="w-full h-full object-cover object-top"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to bottom, transparent 55%, hsl(var(--background)) 100%)",
                }}
              />
              {/* Name overlay at bottom */}
              <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-6 md:left-10 z-10">
                <h1 className="text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none tracking-[-0.01em] uppercase font-black mb-2 sm:mb-3">
                  {activeArtist.name}
                </h1>
                <a
                  href={activeArtist.linktree}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-foreground/50 text-xs sm:text-sm md:text-base tracking-[0.15em] uppercase hover:text-foreground/70 transition-colors group"
                >
                  <span>Découvrir</span>
                  <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          )}
          {!activeArtist.profileImage && (
            <div className="mb-10 sm:mb-12 md:mb-16">
              <h1 className="text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none tracking-[-0.01em] uppercase font-black mb-2 sm:mb-3">
                {activeArtist.name}
              </h1>
              <a
                href={activeArtist.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-foreground/50 text-xs sm:text-sm md:text-base tracking-[0.15em] uppercase hover:text-foreground/70 transition-colors group"
              >
                <span>Découvrir</span>
                <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          )}

          {/* Bio */}
          <ScrollReveal>
            <section className="mb-14 sm:mb-16 md:mb-20 max-w-2xl">
              <p className="text-foreground/60 text-sm sm:text-base md:text-lg font-semibold leading-relaxed tracking-wide">
                {activeArtist.bio}
              </p>
            </section>
          </ScrollReveal>

          {/* Photos — visual mosaic, no title */}
          {activeArtist.photos.length > 0 ? (
            <ScrollReveal>
              <section className="mb-16 sm:mb-20" aria-label="Photos">
                <div className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide pb-2">
                  {activeArtist.photos.map((photo, i) => (
                    <div
                      key={i}
                      className="shrink-0 overflow-hidden rounded-xl h-[35vh] sm:h-[40vh] aspect-[3/4]"
                    >
                      <img
                        src={photo}
                        alt={`${activeArtist.name} — photo ${i + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                      />
                    </div>
                  ))}
                </div>
                {activeArtist.photoCredits && (
                  <p className="mt-3 text-foreground/30 text-xs tracking-[0.1em]">
                    {activeArtist.photoCredits}
                  </p>
                )}
              </section>
            </ScrollReveal>
          ) : (
            <section className="mb-20 py-10">
              <p className="text-foreground/40 text-base md:text-lg tracking-[0.15em] italic">
                Coming soon…
              </p>
            </section>
          )}

          {/* Clips */}
          {activeArtist.clips.length > 0 && (
            <ScrollReveal>
              <section aria-label="Clips vidéo">
                <h3 className="text-xs md:text-sm tracking-[0.3em] uppercase text-foreground/40 mb-6 sm:mb-8">
                  Clips
                </h3>
                <VideoGrid
                  clips={activeArtist.clips}
                  playingId={playingId}
                  onPlay={(id) => setPlayingId(id)}
                  onStop={() => setPlayingId(null)}
                />
              </section>
            </ScrollReveal>
          )}
        </motion.main>
      </AnimatePresence>

      {/* Bottom Navigation */}
      <nav
        className="sticky bottom-0 z-20 flex items-center justify-center px-6 py-4 sm:py-5 md:px-10 md:py-6"
        style={{ background: "linear-gradient(to top, hsl(var(--background)) 60%, transparent)" }}
        aria-label="Navigation principale"
      >
        <a href="/artistes" className="text-foreground text-xs sm:text-sm md:text-base tracking-[0.2em] font-normal hover:opacity-70 transition-opacity uppercase">ARTISTES</a>
      </nav>
    </div>
  );
};

export default Artistes;
