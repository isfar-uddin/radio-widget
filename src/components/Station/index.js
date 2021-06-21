import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

import { convertPointToComa } from "utils/formatNumber";
import styles from "./station.module.scss";
import Elipsis from "assets/images/elipsis.svg";
import Plus from "assets/images/plus.png";
import Minus from "assets/images/minus.png";

const Station = ({ station, toggleStationDetailsView, isLastItem }) => {
  const { id, title, frequency, isOpen } = station;

  const nothingHappen = () => console.log("Your click is working. :)");

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
            onClick={nothingHappen}
            alt="zoomout"
          />
          <img className={styles.elipsisIcon} src={Elipsis} alt="station" />
          <img
            className={styles.plusIcon}
            src={Plus}
            onClick={nothingHappen}
            alt="zoomin"
          />
        </div>
      </CSSTransition>
      <div
        className={styles.stationDetails}
        onClick={() => toggleStationDetailsView(id)}
      >
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
    toggleStationDetailsView: () => {},
  },
};

Station.propTypes = {
  station: PropTypes.shape({
    title: PropTypes.string,
    frequency: PropTypes.number,
    isOpen: PropTypes.bool,
    toggleStationDetailsView: PropTypes.func,
  }),
};

export default Station;
