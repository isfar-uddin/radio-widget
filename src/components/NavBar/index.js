import React from "react";
import styles from "./navBar.module.scss";
import backArrow from "assets/images/back-arrow.png";
import Switch from "assets/images/switch.png";

const NavBar = () => {
  return (
    <div className={styles.navBarContainer}>
      <img className={styles.backArrowIcon} src={backArrow} />
      <span className={styles.title}>Stations</span>
      <img className={styles.switchIcon} src={Switch} />
    </div>
  );
};

export default NavBar;
