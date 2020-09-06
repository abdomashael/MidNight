import SectionItem from "../section_item/section_item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./section.module.css";

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

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
    setReachMaxIndicator(indicators.length - 1 === currentIndicator);
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

const Section = (props) => {
  const [section, setSection] = useState({});
  const [transformX, setTrasformX] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    window.innerWidth - (window.innerWidth * 15) / 100
  );
  const [isHover, setIsHover] = useState(false);

  const [currentIndicator, setCurrentIndicator] = useState(0);
  const [reachMaxIndicator, setReachMaxIndicator] = useState(false);

  const [vw, setVW] = useState(
    Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  );

  // useEffect(() => {
  //   // console.log(props.sections);

  //   window.addEventListener("resize", () => {
  //     let width = (vw * 15) / 100;

  //     while (width < window.innerWidth) {
  //       width += (vw * 15) / 100;
  //     }
  //     // width += (vw * 16) / 100/2;

  //     setWindowWidth(width);
  //   });
  // }, []);

  useEffect(() => {
    setWindowWidth(window.innerWidth - (window.innerWidth * 15) / 100);
  }, []);

  useEffect(() => {
    if (props.sections.length > 0) {
      setSection(props.sections[props.sectionIdx]);
    }
  }, [props.sections]);

  const leftOnClickHandler = () => {
    const oldX = transformX;
    setTrasformX(oldX + windowWidth);
    setCurrentIndicator(currentIndicator - 1);
  };

  const rightOnClickHandler = () => {
    const oldX = transformX;
    setTrasformX(oldX - windowWidth);
    setCurrentIndicator(currentIndicator + 1);
  };

  return (
    <div className={styles.conatiner}>
      <div className={styles.sectionTop}>
        <label className={styles.sectionName}>
          {section.section_name ? section.section_name : ""}
        </label>
        <SectionIndicators
          windowWidth={windowWidth}
          itemWidth={(vw * 16) / 100}
          numOfItems={section.results ? section.results.length : 0}
          currentIndicatorChange={currentIndicator}
          isHover={isHover}
          setReachMaxIndicator={setReachMaxIndicator}
        />
      </div>
      <div>
        <span
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          hidden={!isHover || currentIndicator === 0}
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
          hidden={!isHover || reachMaxIndicator}
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
          {section.results
            ? section.results.map((item) => (
                <SectionItem
                key={item.id}
                  hoverChange={setIsHover}
                  data={item}
                ></SectionItem>
              ))
            : ""}
          {/* <SectionItem hoverChange={setIsHover} vipHidden={false} liveHidden={false} title="لية ﻷ" sessionHidden={false} sessionNo={1} mainInfo=" هالة فاخر , أمنية خليل"/>
          <SectionItem hoverChange={setIsHover} vipHidden={false} liveHidden={false} title="لية ﻷ" sessionHidden={false} sessionNo={1} mainInfo=" هالة فاخر , أمنية خليل"/>
          <SectionItem hoverChange={setIsHover} vipHidden={false} liveHidden={false} title="لية ﻷ" sessionHidden={false} sessionNo={1} mainInfo=" هالة فاخر , أمنية خليل"/>
          <SectionItem hoverChange={setIsHover} vipHidden={false} liveHidden={false} title="لية ﻷ" sessionHidden={false} sessionNo={1} mainInfo=" هالة فاخر , أمنية خليل"/>
          <SectionItem hoverChange={setIsHover} vipHidden={false} liveHidden={false} title="لية ﻷ" sessionHidden={false} sessionNo={1} mainInfo=" هالة فاخر , أمنية خليل"/>
          <SectionItem hoverChange={setIsHover} vipHidden={false} liveHidden={false} title="لية ﻷ" sessionHidden={false} sessionNo={1} mainInfo=" هالة فاخر , أمنية خليل"/>
          <SectionItem hoverChange={setIsHover} vipHidden={false} liveHidden={false} title="لية ﻷ" sessionHidden={false} sessionNo={1} mainInfo=" هالة فاخر , أمنية خليل"/>
          <SectionItem hoverChange={setIsHover} vipHidden={false} liveHidden={false} title="لية ﻷ" sessionHidden={false} sessionNo={1} mainInfo=" هالة فاخر , أمنية خليل"/>
          <SectionItem hoverChange={setIsHover} vipHidden={false} liveHidden={false} title="لية ﻷ" sessionHidden={false} sessionNo={1} mainInfo=" هالة فاخر , أمنية خليل"/>
          <SectionItem hoverChange={setIsHover} vipHidden={false} liveHidden={false} title="لية ﻷ" sessionHidden={false} sessionNo={1} mainInfo=" هالة فاخر , أمنية خليل"/>
          <SectionItem hoverChange={setIsHover} vipHidden={false} liveHidden={false} title="لية ﻷ" sessionHidden={false} sessionNo={1} mainInfo=" هالة فاخر , أمنية خليل"/>
          <SectionItem hoverChange={setIsHover} vipHidden={false} liveHidden={false} title="لية ﻷ" sessionHidden={false} sessionNo={1} mainInfo=" هالة فاخر , أمنية خليل"/>
          <SectionItem hoverChange={setIsHover} vipHidden={false} liveHidden={false} title="لية ﻷ" sessionHidden={false} sessionNo={1} mainInfo=" هالة فاخر , أمنية خليل"/>
          <SectionItem hoverChange={setIsHover} vipHidden={false} liveHidden={false} title="لية ﻷ" sessionHidden={false} sessionNo={1} mainInfo=" هالة فاخر , أمنية خليل"/>
          <SectionItem hoverChange={setIsHover} vipHidden={false} liveHidden={false} title="لية ﻷ" sessionHidden={false} sessionNo={1} mainInfo=" هالة فاخر , أمنية خليل"/>
          <SectionItem hoverChange={setIsHover} vipHidden={false} liveHidden={false} title="لية ﻷ" sessionHidden={false} sessionNo={1} mainInfo=" هالة فاخر , أمنية خليل"/>
          <SectionItem hoverChange={setIsHover} vipHidden={false} liveHidden={false} title="لية ﻷ" sessionHidden={false} sessionNo={1} mainInfo=" هالة فاخر , أمنية خليل"/>
          <SectionItem hoverChange={setIsHover} vipHidden={false} liveHidden={false} title="لية ﻷ" sessionHidden={false} sessionNo={1} mainInfo=" هالة فاخر , أمنية خليل"/>
          <SectionItem hoverChange={setIsHover} vipHidden={false} liveHidden={false} title="لية ﻷ" sessionHidden={false} sessionNo={1} mainInfo=" هالة فاخر , أمنية خليل"/>
          <SectionItem hoverChange={setIsHover} vipHidden={false} liveHidden={false} title="لية ﻷ" sessionHidden={false} sessionNo={1} mainInfo=" هالة فاخر , أمنية خليل"/>
          <SectionItem hoverChange={setIsHover} vipHidden={false} liveHidden={false} title="لية ﻷ" sessionHidden={false} sessionNo={1} mainInfo=" هالة فاخر , أمنية خليل"/>
          <SectionItem hoverChange={setIsHover} vipHidden={false} liveHidden={false} title="لية ﻷ" sessionHidden={false} sessionNo={1} mainInfo=" هالة فاخر , أمنية خليل"/>
          <SectionItem hoverChange={setIsHover} vipHidden={false} liveHidden={false} title="لية ﻷ" sessionHidden={false} sessionNo={1} mainInfo=" هالة فاخر , أمنية خليل"/>
          <SectionItem hoverChange={setIsHover} vipHidden={false} liveHidden={false} title="لية ﻷ" sessionHidden={false} sessionNo={1} mainInfo=" هالة فاخر , أمنية خليل"/>
          <SectionItem hoverChange={setIsHover} vipHidden={false} liveHidden={false} title="لية ﻷ" sessionHidden={false} sessionNo={1} mainInfo=" هالة فاخر , أمنية خليل"/>
          <SectionItem hoverChange={setIsHover} vipHidden={false} liveHidden={false} title="لية ﻷ" sessionHidden={false} sessionNo={1} mainInfo=" هالة فاخر , أمنية خليل"/>
          <SectionItem hoverChange={setIsHover} vipHidden={false} liveHidden={false} title="لية ﻷ" sessionHidden={false} sessionNo={1} mainInfo=" هالة فاخر , أمنية خليل"/>
          <SectionItem hoverChange={setIsHover} vipHidden={false} liveHidden={false} title="لية ﻷ" sessionHidden={false} sessionNo={1} mainInfo=" هالة فاخر , أمنية خليل"/>
          <SectionItem hoverChange={setIsHover} vipHidden={false} liveHidden={false} title="لية ﻷ" sessionHidden={false} sessionNo={1} mainInfo=" هالة فاخر , أمنية خليل"/>
          <SectionItem hoverChange={setIsHover} vipHidden={false} liveHidden={false} title="لية ﻷ" sessionHidden={false} sessionNo={1} mainInfo=" هالة فاخر , أمنية خليل"/>
          <SectionItem hoverChange={setIsHover} vipHidden={false} liveHidden={false} title="لية ﻷ" sessionHidden={false} sessionNo={1} mainInfo=" هالة فاخر , أمنية خليل"/>
          <SectionItem hoverChange={setIsHover} vipHidden={false} liveHidden={false} title="لية ﻷ" sessionHidden={false} sessionNo={1} mainInfo=" هالة فاخر , أمنية خليل"/> */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sections: state.home.sections,
  };
};

export default connect(mapStateToProps)(Section);
