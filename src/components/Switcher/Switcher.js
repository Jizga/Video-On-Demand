import React, { useEffect } from "react";
import { useAppContext } from "../../Context/Context";
import UseTheme from "../../hooks/UseTheme";
import styles from "./Switcher.module.scss";

export default function Switcher() {
  const { isLigthTheme, setIsLigthTheme } = useAppContext();

  // useEffect(() => {
  //   const [rootApp] = document.getElementsByTagName("body");
  //   console.log(isLigthTheme, rootApp);

  //   const replaceClass = () => {
  //     if (isLigthTheme) {
  //       rootApp.classList.add("ligth");
  //       rootApp.classList.replace("dark", "ligth");
  //     } else {
  //       rootApp.classList.replace("ligth", "dark");
  //     }
  //   };

  //   replaceClass();
  // }, [isLigthTheme]);


  UseTheme(document.getElementsByTagName('body'))


  return (
    <div className={styles.switchContainer}>
      <input
        type="checkbox"
        id="toggle"
        className={styles["toggle--checkbox"]}
        onChange={() => setIsLigthTheme(!isLigthTheme)}
      />
      <label htmlFor="toggle" className={styles["toggle--label"]}>
        <span className={styles["toggle--label-background"]}></span>
      </label>
    </div>
  );
}
