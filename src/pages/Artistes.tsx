import avlancheLogo from "@/assets/avlanche-logo-white.webp";
import { ExternalLink, Play, X } from "lucide-react";
import { useSearchParams } from "react-router-dom";
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

  return (
    <div className="relative min-h-screen w-screen bg-gradient-to-br from-white via-neutral-50 to-neutral-100 flex flex-col overflow-y-auto">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-5 md:px-10 md:py-8">
        <a href="/" className="block">
          <img
            src={avlancheLogo}
            alt="Avlanche Logo"
            className="h-8 md:h-[55px] w-auto invert"
          />
        </a>
        <a
          href="/contact"
          className="text-neutral-900 text-sm md:text-base tracking-[0.15em] font-light hover:opacity-70 transition-opacity uppercase"
        >
          Contact
        </a>
      </header>

      {/* Artist Tabs */}
      <div className="flex gap-6 md:gap-10 px-6 md:px-10 border-b border-neutral-200">
        {ARTISTS.map((artist) => (
          <button
            key={artist.slug}
            onClick={() => {
              setSearchParams({ tab: artist.slug });
              setPlayingId(null);
            }}
            className={`pb-3 text-sm md:text-base tracking-[0.15em] uppercase font-light transition-all border-b-2 ${
              activeTab === artist.slug
                ? "text-neutral-900 border-neutral-900"
                : "text-neutral-400 border-transparent hover:text-neutral-700"
            }`}
          >
            {artist.name}
          </button>
        ))}
      </div>

      {/* Active Artist Content */}
      <main className="flex-1 px-6 md:px-10 py-12 md:py-20 pb-28">
        <h1 className="text-3xl md:text-6xl tracking-[0.15em] uppercase font-light text-neutral-900 mb-14">
          {activeArtist.name}
        </h1>

        {/* Info row */}
        <div className="flex flex-wrap gap-12 md:gap-16 mb-16">
          <div>
            <h3 className="text-xs md:text-sm tracking-[0.25em] uppercase text-neutral-400 mb-6">
              Plateformes
            </h3>
            <a
              href={activeArtist.linktree}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-neutral-900 text-sm md:text-base tracking-wide hover:opacity-60 transition-all group"
            >
              <span className="border-b border-neutral-300 group-hover:border-neutral-900 transition-colors pb-0.5">Linktree</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          <div>
            <h3 className="text-xs md:text-sm tracking-[0.25em] uppercase text-neutral-400 mb-6">
              Photos de presse
            </h3>
            {activeArtist.photos.length > 0 ? (
              <div className="grid grid-cols-2 gap-3">
                {activeArtist.photos.map((photo, i) => (
                  <img
                    key={i}
                    src={photo}
                    alt={`${activeArtist.name} press photo ${i + 1}`}
                    className="w-full aspect-[3/4] object-cover"
                  />
                ))}
              </div>
            ) : (
              <p className="text-neutral-400 text-sm italic">Bientôt disponible</p>
            )}
          </div>
        </div>

        {/* Clips grid - full width */}
        {activeArtist.clips.length > 0 && (
          <div>
            <h3 className="text-xs md:text-sm tracking-[0.25em] uppercase text-neutral-400 mb-6">
              Clips
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {activeArtist.clips.map((clip, i) => {
                const videoId = getYouTubeId(clip.url);
                const isPlaying = playingId === videoId;

                return (
                  <div key={i} className="group">
                    {videoId && (
                      <div className="relative aspect-video w-full overflow-hidden rounded-sm mb-2">
                        {isPlaying ? (
                          <>
                            <iframe
                              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                              title={clip.title}
                              className="absolute inset-0 w-full h-full"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                            <button
                              onClick={() => setPlayingId(null)}
                              className="absolute top-2 right-2 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-1 transition-colors"
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
                              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                              alt={clip.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                              <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                <Play className="w-5 h-5 text-neutral-900 ml-0.5" fill="currentColor" />
                              </div>
                            </div>
                          </button>
                        )}
                      </div>
                    )}
                    <span className="text-neutral-900 text-sm tracking-wide font-medium">
                      {clip.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-5 md:px-10 md:py-8 bg-white/80 backdrop-blur-md">
        <a href="/artistes" className="text-neutral-900 text-xs md:text-sm tracking-[0.2em] font-light hover:opacity-70 transition-opacity uppercase">ARTISTES</a>
        <a href="/about" className="text-neutral-900 text-xs md:text-sm tracking-[0.2em] font-light hover:opacity-70 transition-opacity uppercase">ABOUT</a>
        <a href="https://avlanchestudio.fr" target="_blank" rel="noopener noreferrer" className="text-neutral-900 text-xs md:text-sm tracking-[0.2em] font-light hover:opacity-70 transition-opacity uppercase">STUDIO</a>
      </nav>
    </div>
  );
};

export default Artistes;
