import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { Context } from "../../context/context";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { setIsVideoPlayed } = useContext(Context);

  return (
    <>
      <nav className={styles.nav}>
        <Link to="/">
          <h3
            className={styles.btnNavbar}
            onClick={() => setIsVideoPlayed(false)}
          >
            Home
          </h3>
        </Link>

        <Link to="/history">
          <h3 className={styles.btnNavbar}>History</h3>
        </Link>
      </nav>
      <Outlet />
    </>
  );
}
