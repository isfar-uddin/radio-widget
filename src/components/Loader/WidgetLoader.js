import React from "react";
import Loader from "assets/gif/loader.svg";
import styles from "./widgetLoader.module.scss";

export default function WidgetLoader({ classes }) {
  return (
    <div className={`${styles.loaderContainer} ${classes}`}>
      <img src={Loader} className={styles.loaderIcon} alt="loader" />
    </div>
  );
}
