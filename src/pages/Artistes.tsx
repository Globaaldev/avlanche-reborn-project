import avlancheLogo from "@/assets/avlanche-logo-white.webp";
import { ExternalLink } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const ARTISTS = [
  {
    name: "Sherifflazone",
    slug: "sherifflazone",
    linktree: "https://linktr.ee/sherifflazone",
    clips: [] as { title: string; url: string }[],
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

  return (
    <div className="relative min-h-screen w-screen bg-gradient-to-br from-white via-neutral-50 to-neutral-100 flex flex-col">
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
            onClick={() => setSearchParams({ tab: artist.slug })}
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
        <h1 className="text-3xl md:text-6xl tracking-[0.15em] uppercase font-light text-foreground mb-14">
          {activeArtist.name}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Linktree */}
          <div>
            <h3 className="text-xs md:text-sm tracking-[0.25em] uppercase text-muted-foreground mb-6">
              Plateformes
            </h3>
            <a
              href={activeArtist.linktree}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-foreground text-sm md:text-base tracking-wide hover:opacity-70 transition-opacity border border-border px-5 py-3"
            >
              Linktree
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Photos de presse */}
          <div>
            <h3 className="text-xs md:text-sm tracking-[0.25em] uppercase text-muted-foreground mb-6">
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
              <p className="text-muted-foreground text-sm italic">
                Bientôt disponible
              </p>
            )}
          </div>

          {/* Clips */}
          <div>
            <h3 className="text-xs md:text-sm tracking-[0.25em] uppercase text-muted-foreground mb-6">
              Clips
            </h3>
            {activeArtist.clips.length > 0 ? (
              <div className="space-y-3">
                {activeArtist.clips.map((clip, i) => (
                  <a
                    key={i}
                    href={clip.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-foreground text-sm tracking-wide hover:opacity-70 transition-opacity"
                  >
                    {clip.title}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-sm italic">
                Bientôt disponible
              </p>
            )}
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-5 md:px-10 md:py-8 bg-background/80 backdrop-blur-md">
        <a href="/artistes" className="text-foreground text-xs md:text-sm tracking-[0.2em] font-light hover:opacity-70 transition-opacity uppercase">ARTISTES</a>
        <a href="/about" className="text-foreground text-xs md:text-sm tracking-[0.2em] font-light hover:opacity-70 transition-opacity uppercase">ABOUT</a>
        <a href="https://avlanchestudio.fr" target="_blank" rel="noopener noreferrer" className="text-foreground text-xs md:text-sm tracking-[0.2em] font-light hover:opacity-70 transition-opacity uppercase">STUDIO</a>
      </nav>
    </div>
  );
};

export default Artistes;
