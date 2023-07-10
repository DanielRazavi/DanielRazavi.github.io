import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import boxStyle from "./Box.module.css";

import Overlay from "./Overlay";
import Video from "./Video";
import Documents from "./Documents";
import Slides from "./Slides";

const NewBox = ({ hint, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayContent, setOverlayContent] = useState(null);

  const navigator = useNavigate();

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const handleButtonClick = (buttonProps) => {
    console.log(buttonProps);
    if (
      buttonProps.type === "Video" ||
      buttonProps.type === "Document" ||
      buttonProps.type === "Slides"
    ) {
      setShowOverlay(true);
      if (buttonProps.type === "Video") {
        setOverlayContent(
          <Video title={buttonProps.children} url={buttonProps.url} />
        );
      } else if (buttonProps.type === "Document") {
        setOverlayContent(
          <Documents title={buttonProps.label} url={buttonProps.url} />
        );
      } else if (buttonProps.type === "Slides") {
        setOverlayContent(
          <Slides title={buttonProps.label} url={buttonProps.url} />
        );
      }
    } else {
      if (buttonProps.type === "iLink") {
        navigator(buttonProps.url);
      } else if (buttonProps.type === "eLink") {
        window.location.href = buttonProps.url;
      }
    }
  };

  const handleOverlayClose = () => {
    setShowOverlay(false);
    setOverlayContent(null);
  };

  const boxClassName = `${boxStyle.box} ${isHovered ? boxStyle.hovered : ""}`;

  return (
    <div
      className={boxClassName}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}>
      <h1 className={boxStyle.hint}>{hint}</h1>
      {React.Children.map(children, (child) => {
        if (child.type === "p") {
          return <p className={boxStyle.paragraph}>{child.props.children}</p>;
        } else if (child.type === "button") {
          const buttonProps = child.props;
          return (
            <div key={buttonProps.label} className="box-buttons">
              <button
                className={boxStyle.button}
                onClick={() => handleButtonClick(buttonProps)}
                type={buttonProps.type}
                url={buttonProps.url}>
                {buttonProps.children}
              </button>
            </div>
          );
        }
        return child;
      })}
      {showOverlay && (
        <Overlay component={overlayContent} onClose={handleOverlayClose} />
      )}
    </div>
  );
};

export default NewBox;
