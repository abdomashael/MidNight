import React, { useEffect, useState } from "react";
import CarosalMain from "../components/carosal_main/carosal_main";
// import SectionItem from "../components/section_item/section_item";
import Section from "../components/section/section";
import CarosalSlider from "../components/carousel_slider/carousel_slider";
import Axios from "axios";
import {
  ADD_HOME_SECTIONS,
  ADD_THUMBNAILS,
  ADD_TRENDS,
  ADD_Carosal_DATA,
} from "../redux/actions";
import { connect } from "react-redux";
import Footer from "../components/footer/footer";
import Loader from "../components/loader/loader";
import section from "../components/section/section";
import {getCarousal, getHome} from "../utils/API";


const cacheIt = async (arr)=>{
  const cacheImages = await arr.map(src=>{
    return new Promise(function (resolve,reject) {
      const img = new Image();
      img.src = src;
      img.onload=resolve
      img.onerror = reject
    })
  })

  await Promise.all(cacheImages)
}
function Home(props) {
  const [sections, setSections] = useState(null);
  const [isLoading, serIsLoading] = useState(true);
  let fetchCarousal = async () => {
    let response = await getCarousal();
    let trends = response.data.results;
    props.setTrends(trends);
    props.setSideInfoData(trends[0]);
    let thumbnails = trends.reduce(
      (total, current) => [
        ...total,
        process.env.REACT_APP_IMAGE_BASE_URL_W300+ current.poster_path,
      ],
      []
    );
    props.setThumbnails(thumbnails);

    await cacheIt(thumbnails)
    // cacheIt(trends.reduce(
    //     (total, current) => [
    //       ...total,
    //       process.env.REACT_APP_IMAGE_BASE_URL + current.backdrop_path,
    //     ],
    //     []
    // ))

  };

  let fetchHome = async () => {

    window.scrollTo(0, 0);
    await fetchCarousal();

    let response = await getHome()
    props.setSections(response.data.sections);

    let ids = response.data.sections.map((_, idx) => idx);
    setSections(
      <div className="section">
        {ids.length > 0
          ? ids.map((idx) => <Section key={idx} sectionIdx={idx}/>)
          : ""}
      </div>
    );
  };
  useEffect(() => {
    if (props.trends&&props.trends.length===0){
      fetchHome().then(_ => serIsLoading(false));
    }else {
      let ids = props.sections.map((_, idx) => idx);
      setSections(
          <div className="section">
            {ids.length > 0
                ? ids.map((idx) => <Section key={idx} sectionIdx={idx}/>)
                : ""}
          </div>
      );
      serIsLoading(false)
    }
  }, []);

  return (
    <div className="App">
      <div className="blockDiv">
        {isLoading ? (
          <div className="loader">
            <Loader/>
          </div>
        ) : (
          <CarosalMain type={1}>
            <CarosalSlider />
            {sections}
            <Footer />
          </CarosalMain>
        )}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    trends: state.home.trends,
    sections: state.home.sections,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSections: (sections) =>
      dispatch({ type: ADD_HOME_SECTIONS, payload: { sections: sections } }),
    setThumbnails: (thumbnails) =>
      dispatch({ type: ADD_THUMBNAILS, payload: { thumbnails: thumbnails } }),
    setTrends: (trends) =>
      dispatch({ type: ADD_TRENDS, payload: { trends: trends } }),
    setSideInfoData: (data) =>
      dispatch({ type: ADD_Carosal_DATA, payload: { data: data } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
