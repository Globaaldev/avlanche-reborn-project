import avlancheLogo from "@/assets/avlanche-logo-white.webp";
import { ExternalLink, Play, X } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function getYouTubeId(url: string) {
  const match = url.match(/(?:v=|\/shorts\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

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
  const navigate = useNavigate();

  return (
    <div className="relative w-full flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-5 md:px-10 md:py-8">
        <div className="flex items-baseline">
          <a href="/" className="block shrink-0">
            <img
              src={avlancheLogo}
              alt="Avlanche Logo"
              className="h-6 md:h-[55px] w-auto brightness-0"
            />
          </a>
          <div className="flex items-baseline gap-1 md:gap-2 ml-0.5 md:ml-1">
            <button
              onClick={() => navigate("/")}
              className="text-foreground text-xs md:text-xl tracking-[0.12em] font-light cursor-pointer transition-all duration-300"
            >
              music
            </button>
            <span className="text-foreground/25 text-[8px] md:text-sm font-light">/</span>
            <button
              onClick={() => navigate("/studio")}
              className="text-foreground/25 text-xs md:text-xl tracking-[0.12em] font-light cursor-pointer transition-all duration-300 hover:text-foreground/70"
            >
              studio
            </button>
          </div>
        </div>
        <a
          href="/contact"
          className="text-foreground text-sm md:text-base tracking-[0.15em] font-light hover:opacity-70 transition-opacity uppercase"
        >
          Contact
        </a>
      </header>

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

        <div className="mb-20">
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
                <div key={i} className="overflow-hidden rounded-md">
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

            {(() => {
              const firstClip = activeArtist.clips[0];
              const videoId = getYouTubeId(firstClip.url);
              const isPlaying = playingId === videoId;
              return videoId ? (
                <div className="mb-6 group">
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-3">
                    {isPlaying ? (
                      <>
                        <iframe
                          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                          title={firstClip.title}
                          className="absolute inset-0 w-full h-full rounded-lg"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                        <button
                          onClick={() => setPlayingId(null)}
                          className="absolute top-3 right-3 z-10 bg-background/50 hover:bg-background/70 text-foreground rounded-full p-1.5 transition-colors backdrop-blur-sm"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => setPlayingId(videoId)}
                        className="relative w-full h-full cursor-pointer"
                      >
                        <img
                          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                          alt={firstClip.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/50 transition-colors flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-6 h-6 text-black ml-1" fill="currentColor" />
                          </div>
                        </div>
                        <span className="absolute bottom-4 left-5 text-white text-sm md:text-base tracking-[0.1em] font-light">
                          {firstClip.title}
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              ) : null;
            })()}

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {activeArtist.clips.slice(1).map((clip, i) => {
                const videoId = getYouTubeId(clip.url);
                const isPlaying = playingId === videoId;

                return (
                  <div key={i} className="group">
                    {videoId && (
                      <div className="relative aspect-video w-full overflow-hidden rounded-md">
                        {isPlaying ? (
                          <>
                            <iframe
                              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                              title={clip.title}
                              className="absolute inset-0 w-full h-full rounded-md"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                            <button
                              onClick={() => setPlayingId(null)}
                              className="absolute top-2 right-2 z-10 bg-background/50 hover:bg-background/70 text-foreground rounded-full p-1 transition-colors backdrop-blur-sm"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </>
                        ) : (
                          <button
                            onClick={() => setPlayingId(videoId)}
                            className="relative w-full h-full cursor-pointer"
                          >
                            <img
                              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                              alt={clip.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center rounded-md">
                              <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-100 scale-90">
                                <Play className="w-4 h-4 text-black ml-0.5" fill="currentColor" />
                              </div>
                            </div>
                            <span className="absolute bottom-2 left-3 text-white text-[11px] md:text-xs tracking-[0.08em] font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {clip.title}
                            </span>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="sticky bottom-0 z-20 flex items-center justify-between px-6 py-5 md:px-10 md:py-6"
        style={{ background: "linear-gradient(to top, hsl(var(--background)) 60%, transparent)" }}
      >
        <a href="/artistes" className="text-foreground text-xs md:text-sm tracking-[0.2em] font-light hover:opacity-70 transition-opacity uppercase">ARTISTES</a>
        <a href="/about" className="text-foreground text-xs md:text-sm tracking-[0.2em] font-light hover:opacity-70 transition-opacity uppercase">ABOUT</a>
      </nav>
    </div>
  );
};

export default Artistes;
