import React, { useEffect, useState } from "react";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./carousel_slider.module.css";

const CarouselSlider = () => {
  const [test, setTEst] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [current, setCurrent] = useState(0);
  const [arrowLeftHidden, setArrowLeftHidden] = useState(false);
  
  const [ numOfSlides,setNoOfSlides] = useState(6)

  useEffect(()=>{
    numberOfSlidesChange(window.innerWidth)
    window.addEventListener('resize', ()=>{
      console.log(window.innerWidth);
      numberOfSlidesChange(window.innerWidth)
    }); 
  },[])

  const numberOfSlidesChange=(windowSize)=>{
    if (windowSize <500) {
      setNoOfSlides(2)
    }else if (windowSize<750) {
      setNoOfSlides(3)
    }else if (windowSize<1000) {
      setNoOfSlides(4)
    }else if (windowSize<1250) {
      setNoOfSlides(5)
    } else {
      setNoOfSlides(6)
    }
  }

  const onChangeHandler = (slide) => {
    console.log(Math.abs(slide % 10));

    setCurrent(slide % 10);
  };

  return (
    <div className={styles.container}>
      <Carousel
        className={styles.slider}
        slidesPerPage={numOfSlides}
        rtl
        clickToChange
        arrowLeft={
          <FontAwesomeIcon
            className={styles.flag}
            size="lg"
            icon={faChevronRight}
            inverse
            color="#ffff"
          />
        }
        arrowLeftDisabled={
          <FontAwesomeIcon size="lg" icon={faChevronRight} hidden={true} />
        }
        arrowRight={
          <FontAwesomeIcon
            className={styles.flag}
            size="lg"
            icon={faChevronLeft}
            color="#ffff"
          />
        }
        arrowRightDisabled={
          <FontAwesomeIcon size="lg" hidden={true} icon={faChevronLeft} />
        }
        addArrowClickHandler
        onChange={onChangeHandler}
      >
        {test.map((element, idx) => {
          return (
            <div key={idx}>
              <img
                className={styles.sliderItem}
                alt="thum"
                src="https://shahidstatic1.akamaized.net/mediaObject/New-Thumbs/Karim2020-22/Sakon-jamlia-logo/original/Sakon-jamlia-logo.png?height=&width=345&croppingPoint=mc&version=1&type=png"
              />
              <div
                className={
                  current === idx ? styles.activeline : styles.inactiveLine
                }
              ></div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
