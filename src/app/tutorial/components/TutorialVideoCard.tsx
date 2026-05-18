import type { TutorialVideo } from '../constants/tutorials';
import { YouTubeEmbed } from './YouTubeEmbed';

interface TutorialVideoCardProps {
  video: TutorialVideo;
}

/** Matches production MuiCard + CardMedia + CardContent layout */
export function TutorialVideoCard({ video }: TutorialVideoCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg bg-white p-4 shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)]">
      <div className="relative h-[200px] overflow-hidden rounded-lg">
        <YouTubeEmbed videoId={video.youtubeId} />
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="mb-2 text-xl font-semibold leading-normal text-[#061456]">
          {video.title.trim()}
        </h3>

        {video.duration ? (
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs leading-normal text-gray-600">{video.duration}</span>
          </div>
        ) : null}

        <p className="text-sm leading-normal text-gray-600">{video.description.trim()}</p>
      </div>
    </article>
  );
}
