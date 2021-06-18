import React from "react";
import styles from "./Footer.module.css";

const Footer = ({ playingFM }) => {
  return (
    <div className={styles.footerContainer}>
      {playingFM?.isOpen && (
        <React.Fragment>
          <div className={styles.text}>Currently Playing</div>
          <span className={styles.title}>{playingFM.title}</span>
        </React.Fragment>
      )}
    </div>
  );
};

export default Footer;
