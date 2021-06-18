import React from "react";
import styles from "./Header.module.css";
import backArrow from "./../../assets/images/back-arrow.png";
import Switch from "./../../assets/images/switch.png";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <img className={styles.backArrowIcon} src={backArrow} />
      <span className={styles.title}>Stations</span>
      <img className={styles.switchIcon} src={Switch} />
    </div>
  );
};

export default Header;
