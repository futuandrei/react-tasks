import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import List from "../pages/List";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import SinglePage from "../pages/SinglePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <List /> },
      { path: "/:id", element: <SinglePage /> },
      { path: "/about", element: <About /> },
    ],
  },
]);
