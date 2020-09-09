import SectionItem from "../section_item/section_item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./section.module.css";

import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";

const SectionIndicators = ({
  numOfIndicators,
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
  }, [currentIndicator, numOfIndicators]);

  const indicatorsCalc = () => {
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isHover, setIsHover] = useState(false);

  const [currentIndicator, setCurrentIndicator] = useState(0);
  const [reachMaxIndicator, setReachMaxIndicator] = useState(false);
  const [numOfIndicators, setNumOfIndicators] = useState(0);

  let conatinerRef = useRef(<div />);

  useEffect(() => {
    setTrasformX(0);
    setCurrentIndicator(0);
    if (conatinerRef.current.offsetWidth < 600) {
      setWindowWidth(
        conatinerRef.current.offsetWidth -
          conatinerRef.current.offsetWidth * 0.4
      );
    } else {
      setWindowWidth(
        conatinerRef.current.offsetWidth -
          conatinerRef.current.offsetWidth * 0.15
      );
    }
  }, [conatinerRef.current.offsetWidth]);

  useEffect(() => {
    if (props.sections.length > 0) {
      setSection(props.sections[props.sectionIdx]);
      let numOfItems = props.sections[props.sectionIdx].results.length;
      let numOfItemsPerScreen = Math.floor(
        conatinerRef.current.offsetWidth / 300
      );
      setNumOfIndicators(Math.ceil(numOfItems / numOfItemsPerScreen));
    }
  }, [props.sections, conatinerRef.current.offsetWidth]);

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
    <div ref={conatinerRef} className={styles.conatiner}>
      <div className={styles.sectionTop}>
        <label className={styles.sectionName}>
          {section.section_name ? section.section_name : ""}
        </label>
        <SectionIndicators
          numOfIndicators={numOfIndicators}
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
