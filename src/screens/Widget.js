import React, { useEffect, useState } from "react";
import Station from "../components/Station";
import styles from "./Widget.module.scss";
import NavBar from "../components/NavBar";
import TabBar from "../components/TabBar";
import connectWidget from "../redux/connect/connectWidget";

const Widget = ({ stationList, fetchstationList }) => {
  const [playingFM, setPlayingFM] = useState({});

  const toggleStationDetailsView = (id) => {
    stationList?.map((item) => {
      if (item.id === id) {
        item.isOpen = !item.isOpen;
        setPlayingFM({ ...item });
      } else {
        item.isOpen = false;
      }
    });
  };

  useEffect(() => {
    stationList?.length > 0 &&
      stationList.map((item) => {
        item.isOpen = false;
        return item;
      });
  }, [stationList]);

  useEffect(() => {
    fetchstationList();
  }, []);

  return (
    <div className={styles.widgetContainer}>
      <NavBar />
      <div className={styles.fmContainer}>
        {stationList.length > 0 &&
          stationList.map((station) => (
            <Station
              key={station.id}
              station={station}
              toggleStationDetailsView={toggleStationDetailsView}
            />
          ))}
      </div>
      <TabBar playingFM={playingFM} />
    </div>
  );
};

export default connectWidget(Widget);
