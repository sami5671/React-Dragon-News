import { createBrowserRouter } from "react-router-dom";
import Root from "../Lyaouts/Root";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";
import Login from "../Pages/Shared/RightSideNav/Login";
import Register from "../Pages/Shared/RightSideNav/Register";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/news.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoutes>
            <News></News>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
