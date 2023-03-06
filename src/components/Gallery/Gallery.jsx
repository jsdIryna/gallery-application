import React from "react";
import ImageItem from "../ImageItem/ImageItem";
import "./gallery.css";

const Gallery = ({ images, hideAddAction, hideLikeAction, removeAction }) => (
  <div className="gallery">
    {images.length > 0 ? (
      images.map(({ webformatURL, pageURL
                  }) => (
        <ImageItem
          hideAddAction={hideAddAction}
          hideLikeAction={hideLikeAction}
          removeAction={removeAction}
          src={webformatURL}
          page={pageURL}
          key={webformatURL}
        />
      ))
    ) : (
      <span>Please search the image</span>
    )}
  </div>
);

export default Gallery;
