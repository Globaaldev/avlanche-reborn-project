import { ExternalLink } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import VideoGrid from "@/components/VideoGrid";
import SEOHead from "@/components/SEOHead";
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

const ARTISTS = [
  {
    name: "Sherifflazone",
    slug: "sherifflazone",
    linktree: "https://linktr.ee/sherifflazone",
    profileImage: sherifflazoneProfile,
    clips: [
      { title: "G-SHOCK", url: "https://www.youtube.com/watch?v=8av0S63V2SQ" },
      { title: "JUMPIN JACK", url: "https://www.youtube.com/watch?v=ii65vUN6y3A" },
      { title: "NEMO", url: "https://www.youtube.com/watch?v=UU1AgwnReLQ" },
      { title: "NO BAP", url: "https://www.youtube.com/watch?v=BSyfY7J_Jpk" },
      { title: "SHERIFF", url: "https://www.youtube.com/watch?v=zetv9yg5wHA" },
      { title: "FUTURAMA", url: "https://www.youtube.com/watch?v=XZYCpI5fs5k" },
      { title: "Dans ma bulle", url: "https://www.youtube.com/watch?v=Lhx2llMul6g" },
    ],
    photos: [sheriffPress1, sheriffPress2, sheriffPress3, sheriffPress4, sheriffPress5, sheriffPress6, sheriffPress7, sheriffPress8, sheriffPress9],
  },
  {
    name: "Marguier",
    slug: "marguier",
    linktree: "https://linktr.ee/marguier",
    profileImage: null as string | null,
    clips: [] as { title: string; url: string }[],
    photos: [] as string[],
  },
  {
    name: "Magie!",
    slug: "magie",
    linktree: "https://linktr.ee/magie",
    profileImage: magieProfile,
    clips: [
      { title: "MAGIE! - Clip", url: "https://www.youtube.com/watch?v=sYWvDOjUK9w" },
    ],
    photos: [magiePress1, magiePress2, magiePress3],
  },
];

const Artistes = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || ARTISTS[0].slug;
  const activeArtist = ARTISTS.find((a) => a.slug === activeTab) || ARTISTS[0];
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <div className="relative flex-1 flex flex-col overflow-y-auto">
      <SEOHead
        title={`${activeArtist.name} — Avlanche Artistes`}
        description={`Découvrez ${activeArtist.name} sur Avlanche. Clips, photos et liens.`}
        path="/artistes"
      />
      {/* Artist Tabs — sticky */}
      <div className="sticky top-0 z-10 bg-background">
        <nav className="flex gap-6 sm:gap-8 md:gap-12 px-6 md:px-10 pt-2 pb-0 overflow-x-auto" aria-label="Artistes">
          {ARTISTS.map((artist) => (
            <button
              key={artist.slug}
              onClick={() => {
                setSearchParams({ tab: artist.slug });
                setPlayingId(null);
              }}
              className={`text-sm md:text-base tracking-[0.2em] uppercase font-light transition-all duration-300 pb-3 relative whitespace-nowrap ${
                activeTab === artist.slug
                  ? "text-foreground"
                  : "text-foreground/30 hover:text-foreground/60"
              }`}
              aria-current={activeTab === artist.slug ? "page" : undefined}
            >
              {artist.name}
              {activeTab === artist.slug && (
                <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-foreground" />
              )}
            </button>
          ))}
        </nav>
        {/* Thin separator */}
        <div className="mx-6 md:mx-10 h-[1px] bg-foreground/10" role="separator" />
      </div>

      {/* Active Artist Content */}
      <main className="flex-1 px-6 md:px-10 py-10 md:py-16 pb-32">
        <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-10 mb-12 md:mb-16 items-start">
          {/* Profile image */}
          {activeArtist.profileImage && (
            <div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden shrink-0">
              <img
                src={activeArtist.profileImage}
                alt={activeArtist.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div>
            <h1 className="text-foreground text-3xl sm:text-4xl md:text-7xl tracking-[0.08em] uppercase font-extralight mb-3">
              {activeArtist.name}
            </h1>
            <a
              href={activeArtist.linktree}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-foreground/50 text-sm md:text-base tracking-[0.15em] uppercase hover:text-foreground/70 transition-colors group"
            >
              <span>Linktree</span>
              <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        {/* Photos de presse — horizontal scroll */}
        {activeArtist.photos.length > 0 && (
          <section className="mb-20" aria-label="Photos de presse">
            <h3 className="text-xs md:text-sm tracking-[0.3em] uppercase text-foreground/40 mb-6">
              Photos de presse
            </h3>
            <div className="relative -mr-6 md:-mr-10">
              <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory pr-6 md:pr-10">
                {activeArtist.photos.map((photo, i) => (
                  <div key={i} className="shrink-0 h-[40vh] md:h-[38vh] overflow-hidden rounded-xl snap-start">
                    <img
                      src={photo}
                      alt={`${activeArtist.name} photo de presse ${i + 1}`}
                      loading="lazy"
                      className="h-full w-auto object-cover hover:scale-[1.03] transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>
              {/* Fade hint on right edge */}
              <div className="absolute top-0 right-0 bottom-4 w-20 md:w-32 pointer-events-none bg-gradient-to-l from-background to-transparent" />
            </div>
          </section>
        )}

        {/* Clips */}
        {activeArtist.clips.length > 0 && (
          <section aria-label="Clips vidéo">
            <h3 className="text-xs md:text-sm tracking-[0.3em] uppercase text-foreground/40 mb-8">
              Clips
            </h3>
            <VideoGrid
              clips={activeArtist.clips}
              playingId={playingId}
              onPlay={(id) => setPlayingId(id)}
              onStop={() => setPlayingId(null)}
            />
          </section>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav
        className="sticky bottom-0 z-20 flex items-center justify-center px-6 py-5 md:px-10 md:py-6"
        style={{ background: "linear-gradient(to top, hsl(var(--background)) 60%, transparent)" }}
        aria-label="Navigation principale"
      >
        <a href="/artistes" className="text-foreground text-sm md:text-base tracking-[0.2em] font-light hover:opacity-70 transition-opacity uppercase">ARTISTES</a>
      </nav>
    </div>
  );
};

export default Artistes;