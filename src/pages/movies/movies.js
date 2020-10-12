import React, { useEffect, useState, Fragment } from "react";
import Axios from "axios";
import styles from "./movies.module.css";
import Pagnetion from "../../components/pagenation/pagenation";
import { connect } from "react-redux";
import { TOGGLE_LOADER } from "../../redux/actions";
import Poster from "../../components/poster_item/poster";
import Footer from "../../components/footer/footer";
import Sort, { SORT, TYPE } from "../../components/sort/sort";
import {getPage} from "../../utils/API";

const Movies = ({setLoader,type}) => {
  const [currentPage, setCurrentPage] = useState([]);
  const [moviesList, setMoviesList] = useState();
  const [sorting, setSorting] = useState(`${SORT[0]}.${TYPE[0]}`);
  const [pagesCount, setPagesCount] = useState(0);
  const [pageNo, setPageNo] = useState(1);

  const getMoviePage = async (sorting, pageNo) => {
    setLoader(true);
    const response = await getPage(type,sorting,pageNo)
    setLoader(false);

    setCurrentPage(response.data.results);
    if (pagesCount === 0) setPagesCount(response.data.total_pages);
  };
  useEffect(() => {
    getMoviePage(sorting, pageNo);
  }, [pageNo]);

  useEffect(() => {
    if (currentPage){
      console.log(currentPage)
    const list = currentPage.map((movie,idx) => (
      <span key={movie.id} >
        {/* <div>{movie.id}</div> */}
        <Poster
            type={type==="tv"?"series":type}
          key={idx}
          data={movie}
        />
      </span>
    ));
    
    moviesList&&moviesList.length>0? setMoviesList( moviesList.concat(list)):setMoviesList(list);
  }
  }, [currentPage]);

  const sortChangeHandler =(sort,type)=>{
    const newSorting =`${sort.value}.${type.value}` 
    console.log(sort);
    if (newSorting !== sorting) {
      setMoviesList([])
      getMoviePage(newSorting,1) 
      setSorting(newSorting)     
    }
  }

  return (
    <div className={styles.page}>
       {moviesList?<Sort onSortChange={sortChangeHandler} />:""}
      <div className={styles.container}>
        {moviesList?moviesList:""}
      </div>
      <Pagnetion pages={pagesCount} setPageNo={setPageNo} />
      <Footer/>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoader: (loader) =>
      dispatch({ type: TOGGLE_LOADER, payload: { loader: loader } }),
  };
};

export default connect(null, mapDispatchToProps)(Movies);
