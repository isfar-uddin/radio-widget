import React from "react";
import Item from "../components/Item";
import styles from "./Widget.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import connectWidget from "../redux/connect/useWidget";

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
