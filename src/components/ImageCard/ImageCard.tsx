import React from "react";
import s from "./ImageCard.module.css";

interface ImageItem {
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  id: string;
}

interface ImageCardProps {
  item: ImageItem;
  onImageClick: (url: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ item, onImageClick }) => {
  return (
    <div className={s.contanier}>
      <img
        src={item.urls.small}
        alt={item.alt_description}
        className={s.img}
        onClick={() => onImageClick(item.urls.regular)}
      />
    </div>
  );
};

export default ImageCard;
