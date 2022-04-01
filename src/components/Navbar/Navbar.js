import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {

  return (
    <>
      <nav className={styles.nav}>
        <NavLink to="/" className={({isActive}) => (isActive ? styles.btnActive : styles.btnInActive)}>
          <h3>Home</h3>
        </NavLink>

        <NavLink to="/history" className={({isActive}) => (isActive ? styles.btnActive : styles.btnInActive)}>
          <h3>History</h3>
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
