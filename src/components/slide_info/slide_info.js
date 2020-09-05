import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import styles from "./slide_info.module.css";
import ActionComponent from "../action_buttons/action";
const SlideInfo = (props) => {
  const [genres,setGenres] = useState("") 

  useEffect(()=>{
    if (props.trends[props.idx]) {
      let newGenres = props.genres.filter(genre=> props.trends[props.idx].genre_ids.includes(genre.id))
      console.log("newGenres",newGenres);
      setGenres( newGenres.map(genre=>genre.name).join(", ")
      )    
    }
  },)
  return (
    <div className=" mt-auto mr-auto ml-3 mb-auto">
      <div className={styles.subContainer}>
        <img
          className={styles.thumbnail}
          alt="thum"
          src={props.thumbnails[props.idx]}
        />
      </div>
      <div className="mt-3">
        <span className={styles.subContainer}>
          
        <span className={styles.title}>
            {props.trends[props.idx] ? props.trends[props.idx].title : ""}
          </span>
          <span>&nbsp;</span>

          <span className={styles.genre}>
            {genres}
              {/* <img
                src="https://shahid.mbc.net/static/fonts/38cd5d569d798c28d57d0ff1480501fe.svg"
                alt="vip"
              /> */}
            </span>
            <span>&nbsp;</span>
          {/* <span className={styles.mainInfo}>{props.trends[props.idx]? props.trends[props.idx].overview:""}</span> */}
        </span>
      </div>
      <div className={styles.subContainer}>
        <p className={styles.para}>
          {props.trends[props.idx] ? props.trends[props.idx].overview : ""}
        </p>
      </div>

      <div className={styles.actionDiv}>
          <ActionComponent wide={true} />
        </div>
    </div>
  );
};

SlideInfo.defaultProps = {
  sessionNo: "",
  mainInfo: "",
  description: "",
};

const mapStateToProps = (state) => {
  return {
    thumbnails: state.carosal.allThumbnails,
    idx: state.carosal.currentThumbnailIdx,
    trends: state.carosal.trends,
    genres: state.general.genres,
  };
};

export default connect(mapStateToProps)(SlideInfo);
