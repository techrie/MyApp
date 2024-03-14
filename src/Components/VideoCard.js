import { Link } from "react-router-dom";
import { generateCount, timeDifference } from "../utils/helper";

const VideoCard = ({ videoInfo }) => {
  if (!videoInfo) return null;

  const { snippet, statistics } = videoInfo;
  const videoId =
    typeof videoInfo.id === "object" ? videoInfo?.id?.videoId : videoInfo?.id;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="mx-3 w-80 p-2 shadow-lg mb-8 flex flex-col h-[280px]">
      <Link className="cursor-pointer flex flex-col flex-1" to={`/watch?v=${videoId}`}>
        <img
          className="md:rounded-lg w-full md:max-w-[340px] aspect-video md:block"
          src={
            thumbnails?.medium?.url
              ? thumbnails?.medium?.url
              : thumbnails?.default?.url
          }
          alt="thumbnail"
        />
      <ul className="px-2 flex flex-col flex-1 mt-2 h-full">
        <li className="font-bold text-sm mb-1">
          {title.length < 40 ? title : title.substring(0, 60) + "..."}
        </li>
        <li className="text-sm text-gray-600">{channelTitle}</li>
        <li className="text-sm text-gray-600">{statistics?.viewCount} views</li>
      </ul>
      </Link>
      </div>
    
  );
};

export const VideoCardSuggestion = ({ videoInfo }) => {
  const { snippet, statistics } = videoInfo;
  const videoId =
    typeof videoInfo.id === "object" ? videoInfo?.id?.videoId : videoInfo?.id;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  return (
    <div className="cursor-pointer mx-2 flex p-2 max-h-[94px]">
      <Link className="min-w-[168px] max-w-[168px]" to={`/watch?v=${videoId}`}>
        <img
          className="w-full rounded-lg aspect-auto h-full object-cover"
          src={thumbnails?.default?.url}
          alt="thumbnail"
        />
      </Link>
      <ul className="px-2">
        <li className="font-bold text-sm text-ellipsis max-h-[40px] overflow-hidden">
          {title}
        </li>
        <li className="text-xs">{channelTitle}</li>
        <li className="text-xs">
          {generateCount(statistics?.viewCount)} views{" "}
          <span className="font-xs text-gray-500">•</span>{" "}
          {timeDifference(new Date(), new Date(publishedAt))}
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;


/*
return (
    <div className="mx-3 w-80 p-2 shadow-lg mb-8">
      <Link className="cursor-pointer" to={`/watch?v=${videoId}`}>
        <img
          className="md:rounded-lg w-full md:max-w-[340px] aspect-video"
          src={
            thumbnails?.medium?.url
              ? thumbnails?.medium?.url
              : thumbnails?.default?.url
          }
          alt="thumbnail"
        />
      </Link>

      <ul className="px-2">
        <li className="font-bold text-sm">
          {title.length < 40 ? title : title.substring(0, 60) + "..."}
        </li>
        <li className="text-xs">{channelTitle}</li>
        <li className="text-xs">{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
  */