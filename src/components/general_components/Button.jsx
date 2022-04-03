import React from "react";
import styles from "./Button.module.css";
import FeatherIcon from "feather-icons-react";

function Button({ icon, text, outline, onClick, color, toggleColor }) {
  return (
    <button
      tabIndex="0"
      style={
        toggleColor && {
          backgroundColor: toggleColor
        }
      }
      className={outline ? styles.buttonOutline : styles.button}
      onClick={onClick}
    >
      <FeatherIcon
        icon={icon}
        color={toggleColor ? "#FFF" : color ? color : "#141413"}
        size="20"
      />
      <div className={styles.text}>{text}</div>
    </button>
  );
}

export default Button;