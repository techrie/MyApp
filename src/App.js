import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./Components/Body";
import Header from "./Components/Header";
import WatchPage from "./Components/WatchPage";
import MainContainer from "./Components/MainContainer";
import "./index.css";
import { Provider } from "react-redux";
import store from "./utils/store";
import VideoContainer from "./Components/VideoContainer";
import Results from "./Components/Results";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
