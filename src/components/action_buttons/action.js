import React, { useState } from "react";
import styles from "./action.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPlay } from "@fortawesome/free-solid-svg-icons";

const ActionComponent = (props) => {
  const watchNowHandler = () => {
    console.log("wwwwwwwwwww");
  };

  const addToFavHandler = () => {
    console.log("addtofav");
  };

  return (
    <div className={styles.subContainer + " mt-2"}>
      <span className={styles.fullBtn + " ml-3"} onClick={watchNowHandler}>
        <span className={`${styles.btnInner} ${props.wide?styles.wide:null} `}>
          <FontAwesomeIcon
            icon={faPlay}
            className={"ml-2 pt-1 " + styles.icon}
          />
          <label> شاهد الاَن </label>
        </span>
      </span>

      <span className={styles.fullBtn} onClick={addToFavHandler}>
        <span className={`${styles.btnInnerBlack} ${props.wide?styles.wide:null} `}>
          <FontAwesomeIcon
            icon={faPlus}
            className={"ml-2 pt-1 " + styles.icon}
          />
          <label> اضف لقائمتي </label>
        </span>
      </span>
    </div>
  );
};

export default ActionComponent;
