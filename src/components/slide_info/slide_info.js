import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import styles from "./slide_info.module.css";
import ActionComponent from "../action_buttons/action";
import fetchGenres from "../../utils/fecth_genres";
import { ADD_GENRES } from "../../redux/actions";
const SlideInfo = (props) => {
  const [genres, setGenres] = useState(<span></span>);

  useEffect(() => {
    const getGenres = async () => {
      let genres = [];
      if (props.genres.length === 0) {
        genres = await fetchGenres();
        props.setGenres(genres);
      } else {
        genres = props.genres;
      }
      if (props.data) {
        let newGenres = props.genres.filter((genre) =>
          props.data.genre_ids.includes(genre.id)
        );
        console.log("newGenres", newGenres);

        setGenres(
          <span className={styles.genre}>
            {newGenres.map((genre) => genre.name).join(", ")}
          </span>
        );
      }
    };
    //getGenres();
  }, []);

  return (
    <div className=" mt-auto mr-auto ml-3 mb-auto">
      <div className={styles.subContainer}>
        <img
          className={styles.thumbnail}
          alt="thum"
          src={
            props.data
              ? process.env.REACT_APP_IMAGE_BASE_URL + props.data.poster_path
              : ""
          }
        />
      </div>
      <div className="mt-3">
        <span className={styles.subContainer}>
          <span className={styles.title}>
            {props.data
              ? props.data.title
                ? props.data.title
                : props.data.original_name
              : ""}
          </span>
          <span>&nbsp;</span>
          {/* <span className={styles.genre}>{props.data?props.data.vote_average:""}</span> */}
          <span>&nbsp;</span>
        </span>
      </div>
      <div className={styles.subContainer}>
        <p className={styles.para}>{props.data ? props.data.overview : ""}</p>
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
    genres: state.general.genres,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setGenres: (genres) =>
      dispatch({ type: ADD_GENRES, payload: { genres: genres } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SlideInfo);
