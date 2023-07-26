import React, { useState } from "react";
import styles from "./Overlay.module.css";

const Overlay = ({ component, onClose }) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      onClose();
    }, 700);
  };

  return (
    <div
      className={`${styles.modalOverlay} ${
        visible ? styles.enter : styles.exit
      }`}>
      <div
        className={`${styles.modalContent} ${
          visible ? styles.enter : styles.exit
        }`}>
        <h1></h1>
        <button className={styles.closeButton} onClick={handleClose}>
          X
        </button>
        {component}
      </div>
    </div>
  );
};

export default Overlay;
