import React from "react";
import PropTypes from "prop-types";
import { convertPointToComa } from "../../utils/formatNumber";
import styles from "./Item.module.css";
import Elipsis from './../../assets/images/elipsis.svg';
import Plus from "./../../assets/images/plus.png";
import Minus from "./../../assets/images/minus.png";

const Item = ({ item, toggleFMView }) => {
  const { id, title, frequency, isOpen } = item;
  return (
    <div className={styles.container} onClick={() => toggleFMView(id)}>
      {isOpen && (
        <div className={styles.imgContainer}>
          <img className={styles.minusIcon} src={Minus} />
          <img className={styles.elipsisIcon} src={Elipsis} />
          <img className={styles.plusIcon} src={Plus} />
        </div>
      )}
      <div className={styles.itemContainer}>
        <div>{title}</div>
        <div className={styles.frequency}>{convertPointToComa(frequency)}</div>
      </div>
    </div>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  frequency: PropTypes.number.isRequired,
};

export default Item;
