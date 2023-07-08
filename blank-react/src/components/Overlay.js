import React, { useState } from "react";
import styles from "./Overlay.module.css";

const Overlay = ({ component, onClose }) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    // Wait for the exit animation to finish before actually closing the overlay
    setTimeout(() => {
      onClose();
    }, 700); // ms matches the duration of the exit animation
  };

  return (
    <>
      (
      <div
        className={`${styles.modalOverlay} ${
          visible ? styles.enter : styles.exit
        }`}>
        <div
          className={`${styles.modalContent} ${
            visible ? styles.enter : styles.exit
          }`}>
          <button className={styles.closeButton} onClick={handleClose}>
            X
          </button>
          {component}
        </div>
      </div>
      )
    </>
  );
};

export default Overlay;
