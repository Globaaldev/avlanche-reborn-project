import { ExternalLink } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import VideoGrid from "@/components/VideoGrid";

const ARTISTS = [
  {
    name: "Sherifflazone",
    slug: "sherifflazone",
    linktree: "https://linktr.ee/sherifflazone",
    clips: [
      { title: "G-SHOCK", url: "https://www.youtube.com/watch?v=8av0S63V2SQ" },
      { title: "JUMPIN JACK", url: "https://www.youtube.com/watch?v=ii65vUN6y3A" },
      { title: "NEMO", url: "https://www.youtube.com/watch?v=UU1AgwnReLQ" },
      { title: "NO BAP", url: "https://www.youtube.com/watch?v=BSyfY7J_Jpk" },
      { title: "SHERIFF", url: "https://www.youtube.com/watch?v=zetv9yg5wHA" },
      { title: "FUTURAMA", url: "https://www.youtube.com/watch?v=XZYCpI5fs5k" },
      { title: "Dans ma bulle", url: "https://www.youtube.com/watch?v=Lhx2llMul6g" },
    ],
    photos: [] as string[],
  },
  {
    name: "Marguier",
    slug: "marguier",
    linktree: "https://linktr.ee/marguier",
    clips: [] as { title: string; url: string }[],
    photos: [] as string[],
  },
  {
    name: "Magie!",
    slug: "magie",
    linktree: "https://linktr.ee/magie",
    clips: [] as { title: string; url: string }[],
    photos: [] as string[],
  },
];

const Artistes = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || ARTISTS[0].slug;
  const activeArtist = ARTISTS.find((a) => a.slug === activeTab) || ARTISTS[0];
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <div className="relative flex-1 flex flex-col overflow-y-auto">
      {/* Artist Tabs */}
      <div className="flex gap-8 md:gap-12 px-6 md:px-10 pt-2 pb-0">
        {ARTISTS.map((artist) => (
          <button
            key={artist.slug}
            onClick={() => {
              setSearchParams({ tab: artist.slug });
              setPlayingId(null);
            }}
            className={`text-xs md:text-sm tracking-[0.2em] uppercase font-light transition-all duration-300 pb-3 relative ${
              activeTab === artist.slug
                ? "text-foreground"
                : "text-foreground/30 hover:text-foreground/60"
            }`}
          >
            {artist.name}
            {activeTab === artist.slug && (
              <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-foreground" />
            )}
          </button>
        ))}
      </div>

      {/* Thin separator */}
      <div className="mx-6 md:mx-10 h-[1px] bg-foreground/10" />

      {/* Active Artist Content */}
      <main className="flex-1 px-6 md:px-10 py-16 md:py-24 pb-32 max-w-6xl">
        <h1 className="text-foreground text-4xl md:text-7xl tracking-[0.08em] uppercase font-extralight mb-4">
          {activeArtist.name}
        </h1>

        <div className="mb-16">
          <a
            href={activeArtist.linktree}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-foreground/40 text-xs md:text-sm tracking-[0.15em] uppercase hover:text-foreground/70 transition-colors group"
          >
            <span>Linktree</span>
            <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* Photos de presse */}
        {activeArtist.photos.length > 0 && (
          <div className="mb-20">
            <h3 className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-foreground/30 mb-8">
              Photos de presse
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {activeArtist.photos.map((photo, i) => (
                <div key={i} className="overflow-hidden">
                  <img
                    src={photo}
                    alt={`${activeArtist.name} press photo ${i + 1}`}
                    className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Clips */}
        {activeArtist.clips.length > 0 && (
          <div>
            <h3 className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-foreground/30 mb-8">
              Clips
            </h3>
            <VideoGrid
              clips={activeArtist.clips}
              playingId={playingId}
              onPlay={(id) => setPlayingId(id)}
              onStop={() => setPlayingId(null)}
            />
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav
        className="sticky bottom-0 z-20 flex items-center justify-between px-6 py-5 md:px-10 md:py-6"
        style={{ background: "linear-gradient(to top, hsl(var(--background)) 60%, transparent)" }}
      >
        <a href="/artistes" className="text-foreground text-xs md:text-sm tracking-[0.2em] font-light hover:opacity-70 transition-opacity uppercase">ARTISTES</a>
        <a href="/about" className="text-foreground text-xs md:text-sm tracking-[0.2em] font-light hover:opacity-70 transition-opacity uppercase">ABOUT</a>
      </nav>
    </div>
  );
};

export default Artistes;
