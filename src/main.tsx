import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NoZod from "./Fetch";
import WithZod from "./FetchZod";
import "./index.css";
import ParseForm from "./ParseForm";
import ParseFormZod from "./ParseFormZod";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/fetch",
    element: <NoZod />,
  },
  {
    path: "/fetchzod",
    element: <WithZod />,
  },
  {
    path: "/form",
    element: <ParseForm />,
  },
  {
    path: "/formzod",
    element: <ParseFormZod />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="bg-slate-200 h-screen p-2">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
