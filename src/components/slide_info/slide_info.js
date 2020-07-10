import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./slide_info.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPlay } from "@fortawesome/free-solid-svg-icons";

const SlideInfo = (props) => {
  return (
    <div>
      <div className=" mt-auto ml-auto mr-3 mb-auto">
        <div>
          <div className={styles.subContainer}>
            <img
              className={styles.thumbnail}
              alt="thum"
              src={props.thumbnailSrc}
            />
          </div>
          <div className="mt-3">
            <span className={styles.subContainer}>
              <span hidden={props.vipHidden}>
                <img
                  src="https://shahid.mbc.net/static/fonts/38cd5d569d798c28d57d0ff1480501fe.svg"
                  alt="vip"
                />
              </span>
              <span>&nbsp;</span>

              <span hidden={props.sessionHidden} className={styles.session}>
                {"(" + props.sessionNo + "الموسم)"}
              </span>
              <span>&nbsp;</span>
              <span className={styles.mainInfo}>{props.mainInfo}</span>
            </span>
          </div>
          <div className="mt-4">
            <ActionComponent />
          </div>
          <div className={styles.subContainer}>
            <p className={styles.arabicPara}>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ActionComponent = () => {
  const watchNowHandler = () => {
    console.log("wwwwwwwwwww");
  };

  const addToFavHandler = () => {
    console.log("addtofav");
  };

  return (
    <div className={styles.subContainer + " mt-2"}>
      <span className={styles.fullBtn + " ml-3"} onClick={watchNowHandler}>
        <span className={styles.btnInner}>
          <label> شاهد الاَن </label>
          <FontAwesomeIcon
            icon={faPlay}
            className={"ml-2 pt-1 " + styles.icon}
          />
        </span>
      </span>

      <span className={styles.fullBtn} onClick={addToFavHandler}>
        <span className={styles.btnInnerBlack}>
          <label> اضف لقائمتي </label>
          <FontAwesomeIcon
            icon={faPlus}
            className={"ml-2 pt-1 " + styles.icon}
          />
        </span>
      </span>
    </div>
  );
};

SlideInfo.defaultProps = {
  sessionNo: "",
  mainInfo: "",
  description: "",
};

export default SlideInfo;
