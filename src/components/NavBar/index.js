import React from "react";
import styles from "./navBar.module.scss";
import backArrow from "assets/images/back-arrow.png";
import Switch from "assets/images/switch.png";

const NavBar = () => {
  const nothingHappen = () => console.log("Your click is working. :)");

  return (
    <div className={styles.navBarContainer}>
      <img
        className={styles.backArrowIcon}
        src={backArrow}
        onClick={nothingHappen}
      />
      <span className={styles.title}>Stations</span>
      <img className={styles.switchIcon} src={Switch} onClick={nothingHappen} />
    </div>
  );
};

export default NavBar;
