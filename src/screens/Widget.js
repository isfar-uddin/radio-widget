import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Station from "components/Station";
import styles from "./Widget.module.scss";
import NavBar from "components/NavBar";
import TabBar from "components/TabBar";
import connectWidget from "redux/connect/connectWidget";
import WidgetLoader from "components/Loader/WidgetLoader";

const Widget = ({ stationList, fetchStationList }) => {
  const [playingFM, setPlayingFM] = useState({});

  //Expand or collapse station details through this function
  const onStationClick = (id) => {
    stationList?.forEach((item) => {
      if (item.id === id) {
        item.isOpen = !item.isOpen;
        setPlayingFM({ ...item }); //Set Which FM is playing
      } else {
        item.isOpen = false;
      }
    });
  };

  //Fetch the StationList when component Loaded
  useEffect(() => {
    fetchStationList();
  }, []);

  return (
    <div className={styles.widgetContainer}>
      <NavBar />
      <div className={styles.fmContainer}>
        {stationList?.map((station, index) => (
          <Station
            key={station.id}
            station={station}
            isLastItem={index === stationList.length - 1}
            onStationClick={onStationClick}
          />
        ))}

        {!stationList?.length && <WidgetLoader />}
      </div>
      <TabBar playingFM={playingFM} />
    </div>
  );
};

Widget.defaultProps = {
  stationList: [],
  fetchStationList: () => {},
};

Widget.propTypes = {
  stationList: PropTypes.array,
  fetchStationList: PropTypes.func,
};

export default connectWidget(Widget);
