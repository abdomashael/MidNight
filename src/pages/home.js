import React, { useEffect, useState } from "react";
import CarosalMain from "../components/carosal_main/carosal_main";
// import SectionItem from "../components/section_item/section_item";
import Section from "../components/section/section";
import CarosalSlider from "../components/carousel_slider/carousel_slider"
import Axios from "axios";
import {
  ADD_HOME_SECTIONS,
  ADD_THUMBNAILS,
  ADD_TRENDS,
  ADD_Carosal_DATA,
} from "../redux/actions";
import { connect } from "react-redux";

function Home(props) {
  const [sectionsIDs, setSectionsIDs] = useState([]);

  let fetchCarosal = async () => {
    console.log("data");
    let response = await Axios.get(
      process.env.REACT_APP_API_URL + "/trending/all/week"
    );
    let trends = response.data.results;
    props.setTrends(trends);
    props.setSideInfoData(trends[0])
    console.log("trends", trends);
    let thumbnails = trends.reduce(
      (total, current) => [
        ...total,
        process.env.REACT_APP_IMAGE_BASE_URL + current.poster_path,
      ],
      []
    );
    props.setThumbnails(thumbnails);
    console.log(thumbnails);
  };

  let fetchHome = async () => {
    let response = await Axios.get(
      process.env.REACT_APP_API_URL + "/page/home"
    );
    props.setSections(response.data.sections);

    // console.log(response.data.sections);
    let ids = response.data.sections.map((_, idx) => idx);
    setSectionsIDs(ids);
  };
  useEffect(() => {
    fetchCarosal();
    fetchHome();
  }, []);

  return (
    <div className="App">
      {/* <p>{process.env.API_URL}</p> */}
      <div className="blockDiv">
        <CarosalMain type={1}>
          <CarosalSlider/>
        </CarosalMain>
      </div>
      <div className="section">
        {sectionsIDs.length > 0
          ? sectionsIDs.map((idx) => (
              <Section key={idx} sectionIdx={idx}></Section>
            ))
          : ""}
      </div>
    </div>
  );
}

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

export default connect(null, mapDispatchToProps)(Home);
