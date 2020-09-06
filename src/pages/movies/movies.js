import React, { useEffect, useState, Fragment } from "react";
import Axios from "axios";
import SectionItem from "../../components/section_item/section_item";
import styles from "./movies.module.css";
import Pagnetion from "../../components/pagenation/pagenation";
import { connect } from "react-redux";
import { TOGGLE_LOADER } from "../../redux/actions";
import Poster from "../../components/poster_item/poster";

const Movies = (props) => {
  const [currentPage, setCurrentPage] = useState([]);
  const [moviesList, setMoviesList] = useState([]);
  const [isHover, setIsHover] = useState(true);
  const [pagesCount, setPagesCount] = useState(0);
  const [pageNo, setPageNo] = useState(1);

  const getMoviePage = async (sorting, pageNo) => {
    // console.log("getMoviePage");
    console.log("pageNo",pageNo);
    props.setLoader(true);
    const response = await Axios.get(
      process.env.REACT_APP_API_URL +
        `/discover/movie/?sorted_by=${sorting}&page=${pageNo}`
    );
    // console.log("getMoviePage", response.data);
    props.setLoader(false);

    setCurrentPage(response.data.results);
    if (pagesCount === 0) setPagesCount(response.data.total_pages);
  };
  useEffect(() => {
    getMoviePage("popularity.desc", pageNo);
  }, [pageNo]);

  useEffect(() => {
    if (currentPage){
    const list = currentPage.map((movie,idx) => (
      <span key={movie.id} className={styles.section}>
        {/* <div>{movie.id}</div> */}
        <Poster
          key={idx}
          data={movie}
        />
      </span>
    ));

    console.log("aaaaaa",currentPage);
    console.log(moviesList.length);
    console.log(list.length);
    
    moviesList.length>0? setMoviesList( moviesList.concat(list)):setMoviesList(list);
  }
  }, [currentPage]);

  return (
    <Fragment>
      <div className={styles.container}>
        {moviesList}
      </div>
      <Pagnetion pages={pagesCount} setPageNo={setPageNo} />
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoader: (loader) =>
      dispatch({ type: TOGGLE_LOADER, payload: { loader: loader } }),
  };
};

export default connect(null, mapDispatchToProps)(Movies);
