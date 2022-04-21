import React from "react";
import { useAppContext } from "../../Context/Context";
import UseTheme from "../../hooks/UseTheme";
import styles from "./Switcher.module.scss";

export default function Switcher() {
  const { isLightTheme, setIsLightTheme } = useAppContext();
  // Change the theme web
  UseTheme(document.getElementsByTagName("body"));

  return (
    <div className={styles.switchContainer}>
      <input
        type="checkbox"
        id="toggle"
        className={styles["toggle--checkbox"]}
        onChange={() => setIsLightTheme(!isLightTheme)}
      />
      <label htmlFor="toggle" className={styles["toggle--label"]}>
        <span className={styles["toggle--label-background"]}></span>
      </label>
    </div>
  );
}
