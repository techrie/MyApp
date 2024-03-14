import { useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard, { VideoCardSuggestion } from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { getSearchVideos } from "../utils/videoSlice";

const VideoContainer = ({ isSuggestion }) => {
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.video.videos);

  const getVideos = async () => {
    //const url = 'https://corsproxy.org/?' + encodeURIComponent(YOUTUBE_VIDEOS_API);
    const url = YOUTUBE_VIDEOS_API;

    const data = await fetch(url);
    const json = await data.json();
    // console.log(json.items);
    // setVideos(json.items);
    dispatch(getSearchVideos(json?.items));
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap items-stretch">
      {videos?.map((video) => {
        const videoId =
          typeof video?.id === "object" ? video?.id?.videoId : video?.id;
        return (
          <div key={videoId}>
            {isSuggestion ? (
              <VideoCardSuggestion
                videoInfo={video}
                isSuggestion={isSuggestion}
              />
            ) : (
              <VideoCard videoInfo={video} isSuggestion={isSuggestion} />
            )}
          </div>
        );
      })}
    </div>
  );
};
export default VideoContainer;

// <Link to={"/watch?v=" + video.id} key={videoId}>
//   <VideoCard videoInfo={video} />
// </Link>;
