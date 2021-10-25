import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import "../../styles/components/gallery/Gallery.scss";
import ImageGallery from "react-image-gallery";

export const GalleryComponent = ({ images }) => {
  return (
    <ImageGallery
      items={images}
      showPlayButton={false}
      showFullscreenButton={false}
      showThumbnails={false}
      showNav={false}
      showBullets={true}
    />
  );
};
