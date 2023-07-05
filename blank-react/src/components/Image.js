import style from "./Image.module.css";
import { useState, useEffect } from "react";

function ImageComponent({ path, alt }) {
  const [isHovered, setIsHovered] = useState(false);

  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    import(`../assets/Images/${path}`)
      .then((module) => setImageSrc(module.default))
      .catch((error) => {
        console.error(`Error loading image: ${error}`);
      });
  }, [path]);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const imageClassName = `${style.image} ${isHovered ? style.hovered : ""}`;

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={imageClassName}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    />
  );
}

export default ImageComponent;
