import React, { useState, useEffect } from "react";

import styles from "./carosal_main.module.css";
import CarouselSlider from "../carousel_slider/carousel_slider";
import SlideInfo from "../slide_info/slide_info";
import Section from "../section/section";
import { Row, Col } from "react-bootstrap";

import { connect } from "react-redux";

const CarosalMain = (props) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    if (props.data && props.type===1) {
      //  console.log(process.env.REACT_APP_IMAGE_BASE_URL + props.trends[props.idx].backdrop_path);
      setImage(
        <img
          alt="main"
          className={styles.myImage}
          src={process.env.REACT_APP_IMAGE_BASE_URL + props.data.backdrop_path}
        ></img>
      );
    }
  }, [props.data]);

  return (
    <div className={styles.carosalContainer}>
      {image}
      {/* <img alt="main" className={styles.myImage} src={imageSrc}></img> */}
      <div className={styles.gradinatBackground}>
        <div className={styles.gradinatBackgroundHorzintal}></div>
      </div>
      <div className={styles.mainDiv}>
        <Row>
          {/* <Col md="6"></Col> */}
          <Col className={styles.mainContainer}>
            {props.type===1?
            <SlideInfo data={props.data}/>
          :
          ""}
          </Col>
        </Row>
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
