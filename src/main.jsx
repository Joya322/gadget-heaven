import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Home from "./components/Home/Home.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import Dashboard from "./components/Dashboard/Dashboard";
import Details from "./components/Details/Details.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: () => fetch("./data.json").then((res) => res.json()),
        },
        ,
        {
          path: "/:product_id",
          element: <Details />,
          loader: () => fetch("./data.json").then((res) => res.json()),
        },
        {
          path: "statistics",
          element: <Statistics />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ]
  // {
  //   basename: "/gadget-heaven/",
  // }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
