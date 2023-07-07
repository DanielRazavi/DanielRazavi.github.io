import boxStyle from "./Box.module.css";
import { useState } from "react";

const Box = ({ hint, title, body, images, buttons }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const boxClassName = `${boxStyle.box} ${isHovered ? boxStyle.hovered : ""}`;

  return (
    <div
      className={boxClassName}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}>
      <h1 className={boxStyle.hint}>{hint}</h1>
      <h1>{title}</h1>
      <p>{body}</p>

      {images && (
        <div className="box-images">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`ax ${index}`} />
          ))}
        </div>
      )}

      {buttons && (
        <>
          {buttons.map((button, index) => (
            <div key="box-buttons">
              <a href={button.href}>
                <button>{button.label}</button>
              </a>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Box;
