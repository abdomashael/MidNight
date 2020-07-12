import SectionItem from "../section_item/section_item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./section.module.css";

import React, { useState, useEffect } from "react";

const SectionIndicators = ({
  windowWidth,
  itemWidth,
  numOfItems,
  currentIndicatorChange,
  isHover,
  setReachMaxIndicator,
}) => {
  const [currentIndicator, setCurrentIndicator] = useState(0);
  const [indicators, setIndicators] = useState([]);

  useEffect(() => {
    setCurrentIndicator(currentIndicatorChange);
  }, [currentIndicatorChange]);

  useEffect(() => {
    setIndicators([]);
    indicatorsCalc();
    setReachMaxIndicator(indicators.length-1 === currentIndicator)
  }, [currentIndicator, windowWidth]);

  const indicatorsCalc = () => {
    let numOfIndicators = Math.ceil((itemWidth * numOfItems) / windowWidth);

    for (let index = 0; index < numOfIndicators; index++) {
      let indicatorColor =
        currentIndicator === index
          ? styles.indicatorActive
          : styles.indicatorInactive;
      let indicatorStyle = `${styles.indicator} ${indicatorColor}`;
      setIndicators((old) => [
        ...old,
        <div className={indicatorStyle} key={index}></div>,
      ]);

    }
  };
  return <div hidden={!isHover}>{indicators}</div>;
};

const Section = () => {
  const [transformX, setTrasformX] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isHover, setIsHover] = useState(false);

  const [currentIndicator, setCurrentIndicator] = useState(0);
  const [reachMaxIndicator, setReachMaxIndicator] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      let width = 300;

      while (width < window.innerWidth) {
        width += 300;
      }
      console.log(width);
      setWindowWidth(width);
    });
  }, []);

  useEffect(() => {
    let width = 300;

    while (width < window.innerWidth) {
      width += 300;
    }
    setWindowWidth(width);
  });

  const leftOnClickHandler = () => {
    const oldX = transformX;
    setTrasformX(oldX + windowWidth);
    setCurrentIndicator(currentIndicator + 1);
  };

  const rightOnClickHandler = () => {
    const oldX = transformX;
    setTrasformX(oldX - windowWidth);
    setCurrentIndicator(currentIndicator - 1);
  };

  return (
    <div className={styles.conatiner}>
      <div className={styles.sectionTop}>
        <label>البث المباشر</label>
        <SectionIndicators
          windowWidth={windowWidth}
          itemWidth={300}
          numOfItems={30}
          currentIndicatorChange={currentIndicator}
          isHover={isHover}
          setReachMaxIndicator={setReachMaxIndicator}
        />
      </div>
      <div>
        <span
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          hidden={!isHover || reachMaxIndicator}
          className={styles.flagLeft}
          onClick={leftOnClickHandler}
        >
          <FontAwesomeIcon
            size="2x"
            icon={faChevronLeft}
            color="#ffff"
            className={styles.icon}
          />
        </span>
        <span
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          hidden={!isHover || currentIndicator === 0}
          className={styles.flagRight}
          onClick={rightOnClickHandler}
        >
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
