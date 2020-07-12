import React, { useState } from "react";

import styles from "./section_item.module.css";
import ActionComponent from "../action_buttons/action";
const SectionItem = (props) => {
  const [isHover, setIsHove] = useState(false);
  const onMouseLeaveHandler = () => {
    props.hoverChange(false);
    setIsHove(false);
  };

  const onMouseEnterHandler = () => {
    props.hoverChange(true);
    setIsHove(true);
  };

  return (
    <a href="https://shahidstatic1.akamaized.net/mediaObject/2020/No-Tags/Lee_La_Thumb_No_Tags_V3/original/Lee_La_Thumb_No_Tags_V3.jpg?height=253&width=450&croppingPoint=&version=1&type=webp">
      <div
        className={styles.mainDiv1}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        <img
          alt="main"
          className={styles.sectionImg}
          src="https://shahidstatic1.akamaized.net/mediaObject/2020/No-Tags/Lee_La_Thumb_No_Tags_V3/original/Lee_La_Thumb_No_Tags_V3.jpg?height=253&width=450&croppingPoint=&version=1&type=webp"
        ></img>

        <div hidden={!isHover} className={styles.bakground}>
          <div>
            <div className={styles.top}>
              <span hidden={props.vipHidden}>
                <img
                  className={styles.icon}
                  src="https://shahid.mbc.net/static/fonts/38cd5d569d798c28d57d0ff1480501fe.svg"
                  alt="vip"
                />
              </span>
              <span className={styles.live} hidden={props.liveHidden}>
                live
              </span>
            </div>
            <div className={styles.container}>
              <div className={styles.body}>
                <div className={styles.title}>{props.title}</div>
                <div>
                  <span hidden={props.sessionHidden} className={styles.session}>
                <span >(الموسم</span>
                <span >{props.sessionNo}</span>
                <span >)</span>
                </span><span>&nbsp;</span>
                  <span className={styles.mainInfo}>{props.mainInfo}</span>
                </div>
              </div>

              <div className={styles.footer}>
              <ActionComponent />

              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default SectionItem;
