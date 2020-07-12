import React, { useState } from "react";
import styles from "./slide_info.module.css";
import ActionComponent from "../action_buttons/action";
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
          <div className={styles.actionDiv}>
            <ActionComponent wide={true}/>
          </div>
          <div className={styles.subContainer}>
            <p className={styles.arabicPara}>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


SlideInfo.defaultProps = {
  sessionNo: "",
  mainInfo: "",
  description: "",
};

export default SlideInfo;
