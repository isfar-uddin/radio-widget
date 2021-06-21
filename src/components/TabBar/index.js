import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import styles from "./tabBar.module.scss";

const TabBar = ({ playingFM }) => {
  const { title, isOpen } = playingFM;
  return (
    <div className={styles.tabBarContainer}>
      <CSSTransition
        in={isOpen}
        timeout={500}
        classNames="tabBarDetails"
        unmountOnExit
      >
        <div>
          <div className={styles.info}>Currently Playing</div>
          <span className={styles.title}>{title}</span>
        </div>
      </CSSTransition>
    </div>
  );
};

TabBar.defaultProps = {
  playingFM: {
    title: "",
    isOpen: false,
  },
};

TabBar.propTypes = {
  playingFM: PropTypes.shape({
    title: PropTypes.string,
    isOpen: PropTypes.bool,
  }),
};

export default TabBar;
