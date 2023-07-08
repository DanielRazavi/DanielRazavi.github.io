import boxStyle from "./Box.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

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
          {buttons.map((button, index) => {
            let buttonComponent;

            if (button.type === "Link") {
              buttonComponent = (
                <Link to={button.href}>
                  <button>{button.label}</button>
                </Link>
              );
            } else if (button.onClick) {
              buttonComponent = (
                <button onClick={button.onClick}>{button.label}</button>
              );
            } else {
              buttonComponent = (
                <a href={button.href}>
                  <button>{button.label}</button>
                </a>
              );
            }

            return (
              <div key={index} className="box-buttons">
                {buttonComponent}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Box;
