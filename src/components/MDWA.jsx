import React, { Component } from "react";
import Welcome from "./Welcome";
import Help from "./Help";
import WritingApp from "./App";

import {
  createBrowserRouter,
  RouterProvider,
  useSearchParams,
} from "react-router-dom";

const App = (props) => {
  let [searchParams] = useSearchParams();
  let parse = (p) => {
    if (typeof p !== "string") return null;
    switch (p.toLowerCase()) {
      case "true":
        return true;
      case "1":
        return true;
      case "false":
        return false;
      case "0":
        return false;
      default:
        return null;
    }
  };

  let appProps = {
    limit: parseInt(searchParams.get("limit"), 10) || 5,
    type: searchParams.get("type") || "minutes",
    hardcore: parse(searchParams.get("hardcore")),
    nightmode: parse(searchParams.get("nightmode")),
  };
  // Setting a random key forces the component to re-mount even if
  // the route didn't change. That's useful for when we click the
  // Write button from withing <WritingApp />
  return <WritingApp key={Math.random()} {...appProps} />;
};

const router = createBrowserRouter(
  [
    { path: "/", element: <Welcome /> },
    { path: "/write", element: <App /> },
    { path: "/help", element: <Help /> },
  ],
  { basename: process.env.PUBLIC_URL }
);

export default class MDWA extends Component {
  render() {
    return <RouterProvider router={router} />;
  }
}
