
export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_SEARCH_BY_KEYWORD_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=[QUERY]&key=" +
  process.env.REACT_APP_GOOGLE_API_KEYYE;

/*

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=US&key=" +
  process.env.REACT_APP_GOOGLE_API_KEYYE;
*/

export const YOUTUBE_VIDEOS_API = 
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=US&key=" +process.env.REACT_APP_GOOGLE_API_KEYYE;

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
