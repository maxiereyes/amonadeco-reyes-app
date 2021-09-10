import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

export const GalleryComponent = ({ images }) => {
  return (
    <ImageGallery
      items={images}
      thumbnailPosition={"left"}
      showPlayButton={false}
      showNav={false}
      showFullscreenButton={false}
    />
  );
};
