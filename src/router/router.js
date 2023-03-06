import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LikedPage from "../components/LikedPage/LikedPage";
import React from "react";
import Main from "../components/Main";
import Albums from "../components/Albums/Albums";
import AlbumDetail from "../components/AlbumDetail/AlbumDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/liked",
        element: <LikedPage />,
      },  {
        path: "/albums",
        element: <Albums />,
        children :[
          {
            path: '/albums/:albumId',
            element: <AlbumDetail />
          }
        ]
      },
      {
        path: "/",
        element: <Main />,
      },
    ],
  },
]);
