import React from "react";
import { useSelector } from "react-redux";
import Gallery from "../Gallery/Gallery";

const LikedPage = () => {
  const { likedImages } = useSelector((state) => state.images);
    return <Gallery images={likedImages} />;
};

export default LikedPage;
