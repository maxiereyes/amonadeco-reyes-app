import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import "../../styles/components/gallery/gallery.css";
import ImageGallery from "react-image-gallery";

export const GalleryComponent = ({ images }) => {
  return (
    <ImageGallery
      items={images}
      showPlayButton={false}
      showFullscreenButton={true}
      showBullets={false}
      showNav={true}
    />
  );
};
