import React from "react";
import styles from "./poster.module.css";
const Poster = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.img_conatiner}>
        <img
        alt="sssss"
          className={styles.img}
          src={
            process.env.REACT_APP_IMAGE_BASE_URL +
            props.data.poster_path
          }
        />
        <div className={styles.top}>
          <span
            className={styles.badge + " " + styles.rate}
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
      </div>
      <div className={styles.title}>{props.data.title?props.data.title:props.data.original_title}</div>
    </div>
  );
};

export default Poster;
