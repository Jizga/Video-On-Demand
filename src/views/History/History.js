import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Switcher from "../../components/Switcher/Switcher";
import { useAppContext } from "../../Context/Context";
import styles from "./History.module.scss";

export default function History() {
  const { watchedList, isLightTheme, setIsLightTheme } = useAppContext();

  return (
    <div>
      {watchedList.length ? (
        <Carousel data={watchedList} />
      ) : (
        <p className={styles.textDefault}>You did not watch any videos yet</p>
      )}
      <Switcher
        isOn={isLightTheme}
        handleToggle={() => setIsLightTheme(!isLightTheme)}
      />
    </div>
  );
}
