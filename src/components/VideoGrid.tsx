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
      className="absolute inset-0 w-full h-full rounded-[inherit]"
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
}: {
  videoId: string;
  title: string;
  onPlay: () => void;
}) => (
  <button
    onClick={onPlay}
    className="relative w-full h-full cursor-pointer group/thumb rounded-[inherit] overflow-hidden"
  >
    <img
      src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
      alt={title}
      loading="lazy"
      className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
    />
    <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/20 transition-colors duration-300" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover/thumb:scale-110 opacity-80 group-hover/thumb:opacity-100">
        <Play className="w-4 h-4 text-black ml-0.5" fill="currentColor" />
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent pt-8 pb-3 px-3">
      <span className="text-white text-[11px] md:text-xs tracking-[0.08em] font-light line-clamp-2">
        {title}
      </span>
    </div>
  </button>
);

const VideoGrid = ({ clips, playingId, onPlay, onStop }: VideoGridProps) => {
  if (clips.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
      {clips.map((clip) => {
        const videoId = getYouTubeId(clip.url);
        if (!videoId) return null;
        return (
          <div key={videoId} className="relative aspect-video overflow-hidden rounded-xl">
            {playingId === videoId ? (
              <VideoEmbed videoId={videoId} title={clip.title} onStop={onStop} />
            ) : (
              <VideoThumbnail videoId={videoId} title={clip.title} onPlay={() => onPlay(videoId)} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default VideoGrid;
export { getYouTubeId };