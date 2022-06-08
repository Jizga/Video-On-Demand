import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useAppContext } from "../../context/context";
import UseTheme from "../../hooks/UseTheme";
import styles from "./Switcher.module.scss";

export default function Switcher({ isOn, handleToggle }) {
  const { isLightTheme, setIsLightTheme } = useAppContext();
  // Change the theme web
  UseTheme(document.getElementsByTagName("body"));

  useEffect(() => {
    isOn ? setIsLightTheme(true) : setIsLightTheme(false);
  }, [isOn, isLightTheme, setIsLightTheme]);

  return (
    <div className={styles.switchContainer}>
      <input
        type="checkbox"
        id="toggle"
        className={styles["toggle--checkbox"]}
        // 'checked' is used to save the change about isLightTheme's state
        checked={!isOn}
        onChange={handleToggle}
      />
      <label htmlFor="toggle" className={styles["toggle--label"]}>
        <span className={styles["toggle--label-background"]}></span>
      </label>
    </div>
  );
}

Switcher.propTypes = {
  isOn: PropTypes.bool,
  handleToggle: PropTypes.func,
};
