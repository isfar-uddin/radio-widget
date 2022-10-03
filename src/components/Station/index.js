import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

import { convertPointToComa } from "utils/formatNumber";
import styles from "./station.module.scss";
import Elipsis from "assets/images/elipsis.svg";
import Plus from "assets/images/plus.png";
import Minus from "assets/images/minus.png";

const Station = ({ station, onStationClick, isLastItem }) => {
  const { id, title, frequency, isOpen } = station;

  return (
    <div
      className={styles.stationContainer}
      style={{ borderBottom: isLastItem && "none" }}
    >
      <CSSTransition
        in={isOpen}
        timeout={500}
        classNames="stationDetails"
        unmountOnExit
      >
        <div className={styles.iconContainer}>
          <img
            className={styles.minusIcon}
            src={Minus}
            alt="zoomout"
          />
          <img className={styles.elipsisIcon} src={Elipsis} alt="station" />
          <img
            className={styles.plusIcon}
            src={Plus}
            alt="zoomin"
          />
        </div>
      </CSSTransition>
      <div className={styles.stationDetails} onClick={() => onStationClick(id)}>
        <div className={styles.stationName}>{title}</div>
        <div className={styles.frequency}>{convertPointToComa(frequency)}</div>
      </div>
    </div>
  );
};

Station.defaultProps = {
  station: {
    title: "",
    frequency: 0,
    isOpen: false,
    onStationClick: () => {},
  },
};

Station.propTypes = {
  station: PropTypes.shape({
    title: PropTypes.string,
    frequency: PropTypes.number,
    isOpen: PropTypes.bool,
    onStationClick: PropTypes.func,
  }),
};

export default Station;
