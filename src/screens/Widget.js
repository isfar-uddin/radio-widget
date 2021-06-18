import React from "react";
import Item from "../components/Item";
import styles from "./Widget.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import connectWidget from "../redux/connect/useWidget";

/* let FM = [
  { id: 1, title: "Putin FM", frequency: 66.6 },
  { id: 2, title: "Dribble FM", frequency: 101.2 },
  { id: 3, title: "Doge FM", frequency: 99.4 },
  { id: 4, title: "Ballads FM", frequency: 87.1 },
  { id: 5, title: "Maximum FM", frequency: 142.2 },
  { id: 6, title: "Dribble new FM", frequency: 142.2 },
  { id: 7, title: "Putin new FM", frequency: 142.2 },
  { id: 8, title: "Doge new FM", frequency: 142.2 },
]; */

const Widget = ({ fmList: FM, getFMList }) => {
  const [playingFM, setPlayingFM] = React.useState({});

  const toggleFMView = (id) => {
    FM?.map((item) => {
      if (item.id === id) {
        item.isOpen = !item.isOpen;
        setPlayingFM({ ...item });
      } else {
        item.isOpen = false;
      }
    });
  };

  React.useEffect(() => {
    FM?.length > 0 &&
      FM.map((item) => {
        item.isOpen = false;
        return item;
      });
  }, [FM]);

  React.useEffect(() => {
    getFMList();
  }, []);

  return (
    <div className={styles.widgetContainer}>
      <Header />
      <div className={styles.fmContainer}>
        {FM.length > 0 &&
          FM.map((item) => (
            <Item key={item.id} item={item} toggleFMView={toggleFMView} />
          ))}
      </div>
      <Footer playingFM={playingFM} />
    </div>
  );
};

export default connectWidget(Widget);
