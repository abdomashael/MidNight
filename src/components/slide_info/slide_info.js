import React, { useState, useEffect, useContext, useDebugValue } from "react";

import { connect } from "react-redux";

import styles from "./slide_info.module.css";
import ActionComponent from "../action_buttons/action";
import { ADD_GENRES } from "../../redux/actions";
import { DataContext } from "../carosal_main/carosal_main";
const SlideInfo = (props) => {
  const [genres, setGenres] = useState(null);
  const movie = useContext(DataContext);

  useEffect(() => {
    if (movie.data && movie.data.genres) {
      setGenres(movie.data.genres.map((genre) => genre.name).join(", "));
    }
  }, [movie]);

  return (
    <div className=" mt-0 mr-auto ml-3 mb-auto">
      <div className={styles.subContainer}>
        <img
          className={styles.thumbnail}
          alt="thum"
          src={
            movie.data
              ? process.env.REACT_APP_IMAGE_BASE_URL + movie.data.poster_path
              : ""
          }
        />
      </div>
      <div className="mt-3">
        <span className={styles.subContainer}>
          <span className={styles.title}>
            {movie.data
              ? movie.data.title
                ? movie.data.title
                : movie.data.original_name
              : ""}
          </span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
        </span>
      </div>
      <div className={styles.subContainer}>
        <p
          className={
            movie.type === 1
              ? styles.para + " " + styles.paraExtra
              : styles.para
          }
        >
          {movie.data ? movie.data.overview : ""}
        </p>
      </div>

      {genres ? (
        <span className={styles.subInfo}>
          <span className={styles.part}></span>{" "}
          <span className={styles.green}>{genres}</span>
        </span>
      ) : (
        ""
      )}
      <div>
        {movie.data && movie.data.vote_average ? (
          <span className={styles.subInfo}>
            <span className={styles.part}></span>{" "}
            <span className={styles.green}>Vote AVG:</span>
            <span className={styles.gold}>{movie.data.vote_average}</span>
          </span>
        ) : (
          ""
        )}
      </div>

      {movie.data && movie.data.status ? (
        <span className={styles.subInfo}>
          <span className={styles.part}></span>{" "}
          <span className={styles.green}>{movie.data.status} : </span>
          <span className={styles.gold}>{movie.data.release_date}</span>
        </span>
      ) : (
        ""
      )}

      <div>
        {movie.data && movie.data.revenue > 0 ? (
          <span className={styles.subInfo}>
            <span className={styles.part}></span>{" "}
            <span className={styles.green}>revenue : </span>
            <span className={styles.gold}>
              {movie.data.revenue  > 1.0e+9
                ? `${(movie.data.revenue / 1.0e+9).toFixed(2)} B`
                : `${(movie.data.revenue / 1.0e+6).toFixed(2)} M`}
            </span>
          </span>
        ) : (
          ""
        )}
      </div>
      <div className={styles.actionDiv}>
        <ActionComponent
          wide={true}
          type={movie.type === 1 ? 1 : 2}
          movie={movie.data}
        />
      </div>
      {props.childern}
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
