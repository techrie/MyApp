import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import {
  YOUTUBE_SEARCH_API,
  YOUTUBE_SEARCH_BY_KEYWORD_API,
} from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { getSearchVideos } from "../utils/videoSlice";
import { nanoid } from "nanoid";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSearchResults = async (query) => {
    if (searchQuery !== "") {
     // const url = 'https://corsproxy.org/?' + encodeURIComponent(YOUTUBE_SEARCH_BY_KEYWORD_API.replace("[QUERY]", query));
     const url = YOUTUBE_SEARCH_BY_KEYWORD_API.replace("[QUERY]", query);
      const data = await fetch(url
      );
      const json = await data.json();
      dispatch(getSearchVideos(json?.items));
    }
  };

  const handleSearch = (suggestion) => {
    getSearchResults(suggestion);
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    console.log(suggestion);
  };

  
  const getSearchSuggestions = async () => {
    // console.log("API Call -- " + searchQuery);

    //const url = 'https://corsproxy.org/?' + encodeURIComponent(YOUTUBE_SEARCH_API + searchQuery);
    const url = YOUTUBE_SEARCH_API + searchQuery;
    const data = await fetch(url);
    const json = await data.json();

    setSuggestions(json[1]);

    //update cache if searchQuery is not already present in cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  

  useEffect(() => {
    let timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className="grid grid-flow-col shadow-lg p-5">
      <div className="flex col-span-1">
        <img
          className="h-7 cursor-pointer "
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          <img
            className="h-7 mx-2"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10 pl-40">
        <div>
          <input
            className="-ml-10 px-5 w-3/4 py-1 border border-gray-400 rounded-l-full "
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button
            onClick={() => getSearchResults(searchQuery)}
            className="py-1 border border-gray-400 bg-gray-100 border-l-transparent rounded-r-full px-4"
          >
            🔍
          </button>
        </div>
        {showSuggestions && suggestions.length > 0 && (
          <div className="fixed z-[999] -ml-10 bg-white p-2 w-[33rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  onClick={() => handleSearch(suggestion)}
                  className="py-2 px-3 hover:bg-gray-100 cursor-pointer"
                >
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user"
        />
      </div>
    </div>
  );
};
export default Header;
