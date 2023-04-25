import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NoZod from "./routes/Fetch";
import WithZod from "./routes/FetchZod";
import "./index.css";
import ParseForm from "./routes/ParseForm";
import ParseFormZod from "./routes/ParseFormZod";

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
