import React, { useContext } from "react";
import { Context } from "../../context/context";
import Carousel from "../../components/Carousel/Carousel";
import styles from "./History.module.css";

export default function History() {
  const { watchedList } = useContext(Context);
  return (
    <div>
      {watchedList.length ? (
        <Carousel data={watchedList} />
      ) : (
        <p className={styles.textDefault}>You did not watch any videos yet</p>
      )}
    </div>
  );
}
