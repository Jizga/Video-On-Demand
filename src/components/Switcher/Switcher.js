import React from "react";
import styles from "./Switcher.module.scss";

export default function Switcher() {
  return (
    <div class={styles.switchContainer}>
      <input type="checkbox" id="toggle" class={styles["toggle--checkbox"]} />
      <label for="toggle" class={styles["toggle--label"]}>
        <span class={styles["toggle--label-background"]}></span>
      </label>
    </div>
  );
}
