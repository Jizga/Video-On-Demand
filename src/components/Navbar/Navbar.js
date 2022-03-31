import React, { useContext } from "react";
import { Context } from "../../context/context";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { setIsVideoPlayed } = useContext(Context);

  const refreshPage = () => {
    setIsVideoPlayed(false);
  };

  return (
    <div className={styles.nav}>
      <h3 className={styles.btnHome} onClick={() => refreshPage()}>
        Home
      </h3>
      <h3>History</h3>
    </div>
  );
}
