import React, { useEffect, useState, useCallback } from "react";
import Station from "components/Station";
import styles from "./Widget.module.scss";
import NavBar from "components/NavBar";
import TabBar from "components/TabBar";
import connectWidget from "redux/connect/connectWidget";
import WidgetLoader from "components/Loader/WidgetLoader";

const Widget = ({ stationList, fetchStationList }) => {
  const [playingFM, setPlayingFM] = useState({});

  //Expand or collapse station details through this function
  const toggleStationDetailsView = (id) => {
    stationList?.forEach((item) => {
      if (item.id === id) {
        item.isOpen = !item.isOpen;
        setPlayingFM({ ...item }); //Set Which FM is playing
      } else {
        item.isOpen = false;
      }
    });
  };

  //To avoid eslint error
  const fetchStationListCallBack = useCallback(() => {
    return fetchStationList();
  }, [fetchStationList]);

  //Set new property isOpen to check if station is collapse or not
  useEffect(() => {
    stationList?.length > 0 &&
      stationList.forEach((item) => {
        item.isOpen = false;
        return item;
      });
  }, [stationList]);

  //Fetch the StationList when component Loaded
  useEffect(() => {
    fetchStationListCallBack();
  }, [fetchStationListCallBack]);

  return (
    <div className={styles.widgetContainer}>
      <NavBar />
      <div className={styles.fmContainer}>
        {stationList?.length > 0 &&
          stationList?.map((station, index) => (
            <Station
              key={station.id}
              station={station}
              isLastItem={index === stationList.length - 1}
              toggleStationDetailsView={toggleStationDetailsView}
            />
          ))}

        {(!stationList || stationList?.length === 0) && <WidgetLoader />}
      </div>
      <TabBar playingFM={playingFM} />
    </div>
  );
};

export default connectWidget(Widget);
