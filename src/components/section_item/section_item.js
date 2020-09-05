import React, { useState, useEffect } from "react";

import styles from "./section_item.module.css";
import ActionComponent from "../action_buttons/action";
import { connect } from "react-redux";
const SectionItem = (props) => {
  const [isHover, setIsHove] = useState(false);
  const [genres, setGenres] = useState("");

  useEffect(() => {
    if (props.data) {
      let newGenres = props.genres.filter((genre) =>
        props.data.genre_ids.includes(genre.id)
      );
      console.log("newGenres", newGenres);
      setGenres(newGenres.map((genre) => genre.name).join(", "));
    }
  });

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
          alt={props.title}
          className={styles.sectionImg}
          src={process.env.REACT_APP_IMAGE_BASE_URL + props.data.backdrop_path}
        ></img>

        <div hidden={!isHover} className={styles.bakground}>
          <div>
            <div className={styles.top}>
              {/* <span hidden={props.vipHidden}>
                <img
                  className={styles.icon}
                  src="https://shahid.mbc.net/static/fonts/38cd5d569d798c28d57d0ff1480501fe.svg"
                  alt="vip"
                />
              </span> */}

              <span
                className={styles.badge + " " + styles.rate}
                hidden={props.liveHidden}
              >
                {props.data.vote_average}
              </span>

              <span
                hidden={!props.data.adult}
                className={styles.badge + " " + styles.adult}
                // hidden={props.liveHidden}
              >
                +18
              </span>
            </div>
            <div className={styles.container}>
              <div className={styles.body}>
                <div className={styles.title}>{props.data.title}</div>
                <div>
                  <span className={styles.session}>{genres}</span>
                  <span>&nbsp;</span>
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

const mapStateToProps = (state) => {
  return {
    genres: state.general.genres,
  };
};

export default connect(mapStateToProps)(SectionItem);
