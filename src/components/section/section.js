import SectionItem from "../section_item/section_item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./section.module.css";

import React, { useState, useEffect, Fragment } from "react";

const Section = () => {
  const [transformX, setTrasformX] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log(window.innerWidth);
      setWindowWidth(window.innerWidth);
    });
  }, []);

  const leftOnClickHandler = () => {
    const oldX = transformX;
    setTrasformX(oldX + windowWidth);
  };

  const rightOnClickHandler = () => {
    const oldX = transformX;
    setTrasformX(oldX - windowWidth);
  };

  return (
    <div className={styles.conatiner}>
        <div className={styles.sectionTop}>
          <label>البث المباشر</label>
          <div>sdsf</div>
        </div>
        <div>
          <span className={styles.flagLeft} onClick={leftOnClickHandler}>
            <FontAwesomeIcon
              size="2x"
              icon={faChevronLeft}
              color="#ffff"
              className={styles.icon}
            />
          </span>
          <span className={styles.flagRight} onClick={rightOnClickHandler}>
            <FontAwesomeIcon
              size="2x"
              icon={faChevronRight}
              color="#ffff"
              className={styles.icon}
            />
          </span>
            <div
              className={isHover ? styles.sectionHover : styles.section}
              style={{ transform: ` translate3d(${transformX}px, 0px, 0px) ` }}
            >
              <SectionItem hoverChange={setIsHover} />
              <SectionItem hoverChange={setIsHover} />
              <SectionItem hoverChange={setIsHover} />
              <SectionItem hoverChange={setIsHover} />
              <SectionItem hoverChange={setIsHover} />
              <SectionItem hoverChange={setIsHover} />
              <SectionItem hoverChange={setIsHover} />
              <SectionItem hoverChange={setIsHover} />
              <SectionItem hoverChange={setIsHover} />
              <SectionItem hoverChange={setIsHover} />
              <SectionItem hoverChange={setIsHover} />
              <SectionItem hoverChange={setIsHover} />
            </div>
        </div>
      </div>
  );
};

export default Section;
