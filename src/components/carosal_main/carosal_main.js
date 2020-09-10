import React, { useState, useEffect, useDebugValue, useRef } from "react";

import styles from "./carosal_main.module.css";
import CarouselSlider from "../carousel_slider/carousel_slider";
import SlideInfo from "../slide_info/slide_info";
import Section from "../section/section";
import { Row, Col } from "react-bootstrap";

import { connect } from "react-redux";
export const DataContext = React.createContext({});

const CarosalMain = (props) => {
  const [image, setImage] = useState("");
  const[data,setData] = useState(null);
  useEffect(() => {
    if (props.extraData) {
      setImage(
        <img
          alt="main"
          className={styles.myImage}
          src={
            process.env.REACT_APP_IMAGE_BASE_URL + props.extraData.backdrop_path
          }
        ></img>
      );
    }
  }, [props.extraData]);

  useEffect(() => {
    if (props.data && props.type === 1) {
      setImage(
        <img
          alt="main"
          className={styles.myImage}
          src={process.env.REACT_APP_IMAGE_BASE_URL + props.data.backdrop_path}
        ></img>
      );
      setData(props.data)
    }
  }, [props.data]);

  useDebugValue(props.extraData);
  return (
    <div className={styles.carosalContainer}>
      <div className={styles.gradinatBackground}></div>
      <div className={styles.gradinatBackgroundHorzintal}></div>
      <div>{image}</div>
      {/* <img alt="main" className={styles.myImage} src={imageSrc}></img> */}

      <div className={styles.mainDiv}>
    
        <div className={styles.mainContainer}>
          <DataContext.Provider
            value={{
              type: props.type,
              data: props.type === 1 ? data : props.extraData,
            }}
          >
            <SlideInfo ></SlideInfo>
          </DataContext.Provider>
        </div>
        {props.children}
      </div>
    </div>
  );
};

CarosalMain.prototype = {};

CarosalMain.defaultProps = {
  sessionNo: "",
  mainInfo: "",
  description: "",
};

const mapStateToProps = (state) => {
  return {
    data: state.carosal.data,
  };
};

export default connect(mapStateToProps)(CarosalMain);
