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
    if (props.trends[props.idx]){
    //  console.log(process.env.REACT_APP_IMAGE_BASE_URL + props.trends[props.idx].backdrop_path);
      setImage( <img alt="main\" className={styles.myImage} src={process.env.REACT_APP_IMAGE_BASE_URL + props.trends[props.idx].backdrop_path} ></img>);
    }
    }, [props.trends, props.idx]);

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
            <SlideInfo
              // vipHidden={props.vipHidden}
              // sessionHidden={props.sessionHidden}
              // sessionNo={props.sessionNo}
              // mainInfo={props.mainInfo}
              // description={props.description}
              // thumbnailSrc={props.thumbnailSrc}
            ></SlideInfo>
          </Col>
        </Row>
        <CarouselSlider></CarouselSlider>
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
    idx: state.carosal.currentThumbnailIdx,
    trends: state.carosal.trends,
  };
};

export default connect(mapStateToProps)(CarosalMain);
