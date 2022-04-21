import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Navbar.module.scss";
import classNames from "classnames";
import UseTheme from "../../hooks/UseTheme";
import { useAppContext } from "../../Context/Context";

export default function Navbar() {
  const { isLightTheme } = useAppContext();
  // Change the theme web
  UseTheme(document.getElementsByTagName("nav"));

  return (
    <>
      <nav
        className={classNames(
          { [styles.ligth]: isLightTheme },
          { [styles.dark]: !isLightTheme }
        )}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            classNames(styles.btnInActive, { [styles.btnActive]: isActive })
          }
        >
          <h3>Home</h3>
        </NavLink>

        <NavLink
          to="/history"
          className={({ isActive }) =>
            classNames(styles.btnInActive, { [styles.btnActive]: isActive })
          }
        >
          <h3>History</h3>
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
