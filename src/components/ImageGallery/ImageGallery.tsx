import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

interface ImageItem {
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  id: string;
}

interface ImageGalleryProps {
  photos: ImageItem[];
  onImageClick: (url: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  photos,
  onImageClick,
}) => {
  return (
    <ul className={s.ul}>
      {photos.map((item) => (
        <li className={s.li} key={item.id}>
          <div>
            <ImageCard item={item} onImageClick={onImageClick} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
