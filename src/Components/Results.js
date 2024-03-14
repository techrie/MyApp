import { useSelector } from "react-redux";

import VideoCard from "./VideoCard";

const Results = () => {
  const searchVideoResults = useSelector((store) => store.video.videos);

  return (
    <div className="flex flex-wrap">
      {searchVideoResults.map((video) => (
        <VideoCard key={video.id} videoInfo={video} />
      ))}
    </div>
  );
};
export default Results;
