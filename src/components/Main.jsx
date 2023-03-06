import React from "react";
import Gallery from "./Gallery/Gallery";
import {useSelector} from "react-redux";

const Main = () => {
    const { images } = useSelector((state) => state.images);

    return (
    <div>
      <Gallery images={images} />
    </div>
  );
};

export default Main;
