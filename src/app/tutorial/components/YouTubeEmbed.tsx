interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
}

function getEmbedSrc(videoId: string) {
  if (videoId.startsWith('http')) return videoId;
  return `https://www.youtube.com/embed/${videoId}`;
}

export function YouTubeEmbed({
  videoId,
  title = 'ExactFlow tutorial video',
}: YouTubeEmbedProps) {
  return (
    <div
      className="relative w-full"
      style={{ paddingTop: '45.9300607%' }}
    >
      <iframe
        title={title}
        src={getEmbedSrc(videoId)}
        className="absolute inset-0 h-full w-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
