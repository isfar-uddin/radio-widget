import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

import { convertPointToComa } from "../../utils/formatNumber";
import styles from "./station.module.scss";
import Elipsis from "./../../assets/images/elipsis.svg";
import Plus from "./../../assets/images/plus.png";
import Minus from "./../../assets/images/minus.png";

const Station = ({ station, toggleStationDetailsView }) => {
  const { id, title, frequency, isOpen } = station;
  return (
    <div className={styles.stationContainer}>
      <CSSTransition
        in={isOpen}
        timeout={350}
        classNames="stationDetails"
        unmountOnExit
      >
        <div className={styles.iconContainer}>
          <img className={styles.minusIcon} src={Minus} />
          <img className={styles.elipsisIcon} src={Elipsis} />
          <img className={styles.plusIcon} src={Plus} />
        </div>
      </CSSTransition>
      <div
        className={styles.stationDetails}
        onClick={() => toggleStationDetailsView(id)}
      >
        <div>{title}</div>
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
