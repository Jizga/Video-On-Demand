import React from "react";
// import { useAppContext } from "../../Context/Context";
import styles from "./Switcher.module.scss";

export default function Switcher() {
  // const { isLigthTheme, setIsLigthTheme } = useAppContext();

  return (
    <div className={styles.switchContainer}>
      <input
        type="checkbox"
        id="toggle"
        className={styles["toggle--checkbox"]}
      />
      <label htmlFor="toggle" className={styles["toggle--label"]}>
        <span className={styles["toggle--label-background"]}></span>
      </label>
    </div>
  );
}
