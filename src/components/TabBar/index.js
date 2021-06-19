import React, { Fragment } from "react";
import styles from "./tabBar.module.scss";

const Footer = ({ playingFM }) => {
  return (
    <div className={styles.tabBarContainer}>
      {playingFM?.isOpen && (
        <Fragment>
          <div className={styles.info}>Currently Playing</div>
          <span className={styles.title}>{playingFM.title}</span>
        </Fragment>
      )}
    </div>
  );
};

export default Footer;
