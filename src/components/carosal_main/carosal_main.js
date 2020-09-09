import React, { useState, useEffect, useDebugValue } from "react";

import styles from "./carosal_main.module.css";
import CarouselSlider from "../carousel_slider/carousel_slider";
import SlideInfo from "../slide_info/slide_info";
import Section from "../section/section";
import { Row, Col } from "react-bootstrap";

import { connect } from "react-redux";

const CarosalMain = (props) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    if (props.data && props.type === 1) {
      setImage(
        <img
          alt="main"
          className={styles.myImage}
          src={process.env.REACT_APP_IMAGE_BASE_URL + props.data.backdrop_path}
        ></img>
      );
    }
  }, [props.data]);

  useDebugValue(props.extraData)
  return (
    <div className={styles.carosalContainer}>
      {image}
      {/* <img alt="main" className={styles.myImage} src={imageSrc}></img> */}
      <div className={styles.gradinatBackground}>
        <div className={styles.gradinatBackgroundHorzintal}></div>
      </div>
      <div className={styles.mainDiv}>
        {/* <Row> */}
        {/* <Col md="6"></Col> */}
        <div className={styles.mainContainer}>
          {props.type === 1 ? (
            <SlideInfo data={props.data} />
          ) : (
            <SlideInfo data={props.extraData} />
          )}
        </div>
        {/* </Row> */}
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
