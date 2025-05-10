import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";  
import Contact from "./components/Contact";
import Home from "./components/Home";
import Error from "./components/Error";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import CountryDetail from "./components/CountryDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/index.html",
        element: <Home />,
      },
      {
        path: "/:country",
        element: <CountryDetail />,
      },
    ]
  },
 
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);


