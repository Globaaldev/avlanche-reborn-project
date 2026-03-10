import { Play, X } from "lucide-react";

function getYouTubeId(url: string) {
  const match = url.match(/(?:v=|\/shorts\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

interface Clip {
  title: string;
  url: string;
}

interface VideoGridProps {
  clips: Clip[];
  playingId: string | null;
  onPlay: (id: string) => void;
  onStop: () => void;
}

const VideoEmbed = ({
  videoId,
  title,
  onStop,
}: {
  videoId: string;
  title: string;
  onStop: () => void;
}) => (
  <>
    <iframe
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
      title={title}
      className="absolute inset-0 w-full h-full"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <button
      onClick={onStop}
      className="absolute top-3 right-3 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 transition-colors backdrop-blur-sm"
    >
      <X className="w-4 h-4" />
    </button>
  </>
);

const VideoThumbnail = ({
  videoId,
  title,
  onPlay,
  large = false,
}: {
  videoId: string;
  title: string;
  onPlay: () => void;
  large?: boolean;
}) => (
  <button
    onClick={onPlay}
    className="relative w-full h-full cursor-pointer group/thumb"
  >
    <img
      src={`https://img.youtube.com/vi/${videoId}/${large ? "maxresdefault" : "hqdefault"}.jpg`}
      alt={title}
      className={`w-full h-full object-cover transition-transform duration-700 ${large ? "group-hover/thumb:scale-[1.02]" : "group-hover/thumb:scale-105"}`}
    />
    <div className={`absolute inset-0 ${large ? "bg-gradient-to-t from-black/50 via-black/5 to-transparent" : "bg-gradient-to-t from-black/60 via-transparent to-transparent"} transition-colors`} />
    <div className={`absolute inset-0 flex items-center justify-center`}>
      <div className={`${large ? "w-14 h-14 md:w-16 md:h-16" : "w-10 h-10"} rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover/thumb:scale-110`}>
        <Play className={`${large ? "w-5 h-5 md:w-6 md:h-6" : "w-4 h-4"} text-black ml-0.5`} fill="currentColor" />
      </div>
    </div>
    <span className={`absolute bottom-0 left-0 right-0 px-4 ${large ? "pb-5 text-sm md:text-base" : "pb-3 text-[11px] md:text-xs"} text-white tracking-[0.1em] font-light`}>
      {title}
    </span>
  </button>
);

const VideoGrid = ({ clips, playingId, onPlay, onStop }: VideoGridProps) => {
  if (clips.length === 0) return null;

  const featured = clips[0];
  const featuredId = getYouTubeId(featured.url);
  const rest = clips.slice(1);

  return (
    <div className="space-y-4">
      {/* Featured clip — large */}
      {featuredId && (
        <div className="relative aspect-video w-full overflow-hidden rounded-xl">
          {playingId === featuredId ? (
            <VideoEmbed videoId={featuredId} title={featured.title} onStop={onStop} />
          ) : (
            <VideoThumbnail videoId={featuredId} title={featured.title} onPlay={() => onPlay(featuredId)} large />
          )}
        </div>
      )}

      {/* Grid — 2 columns on mobile, 3 on desktop */}
      {rest.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {rest.map((clip, i) => {
            const videoId = getYouTubeId(clip.url);
            if (!videoId) return null;
            return (
              <div key={i} className="relative aspect-video overflow-hidden rounded-lg">
                {playingId === videoId ? (
                  <VideoEmbed videoId={videoId} title={clip.title} onStop={onStop} />
                ) : (
                  <VideoThumbnail videoId={videoId} title={clip.title} onPlay={() => onPlay(videoId)} />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default VideoGrid;
export { getYouTubeId };
