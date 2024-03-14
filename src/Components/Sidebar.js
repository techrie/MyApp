import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="px-6 py-4 shadow-lg w-48">
      <ul>
        <li className="pb-2 hover:bg-gray-100 rounded-lg">
          <Link to="/"> Home</Link>
        </li>
        <li className="pb-2 hover:bg-gray-100 rounded-lg">Shorts</li>
        <li className="pb-2 hover:bg-gray-100 rounded-lg">Videos</li>
      </ul>
      <h1 className="font-bold pt-5 pb-3">Subscriptions</h1>
      <ul>
        <li className="pb-2 hover:bg-gray-100 rounded-lg">Music</li>
        <li className="pb-2 hover:bg-gray-100 rounded-lg">Sports</li>
        <li className="pb-2 hover:bg-gray-100 rounded-lg">Gaming</li>
        <li className="pb-2 hover:bg-gray-100 rounded-lg">Movies</li>
      </ul>
      <h1 className="font-bold pt-5 pb-3">Watch Later</h1>
      <ul>
        <li className="pb-2 hover:bg-gray-100 rounded-lg">Music</li>
        <li className="pb-2 hover:bg-gray-100 rounded-lg">Sports</li>
        <li className="pb-2 hover:bg-gray-100 rounded-lg">Gaming</li>
        <li className="pb-2 hover:bg-gray-100 rounded-lg">Movies</li>
      </ul>
    </div>
  );
};
export default Sidebar;
