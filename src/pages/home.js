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

function Home(props) {
  const [sections, setSections] = useState(null);
  const [isLoading, serIsLoading] = useState(true);
  let fetchCarosal = async () => {
    let response = await Axios.get(
      process.env.REACT_APP_API_URL + "/trending/all/week"
    );
    let trends = response.data.results;
    props.setTrends(trends);
    props.setSideInfoData(trends[0]);
    let thumbnails = trends.reduce(
      (total, current) => [
        ...total,
        process.env.REACT_APP_IMAGE_BASE_URL + current.poster_path,
      ],
      []
    );
    props.setThumbnails(thumbnails);
  };

  let fetchHome = async () => {

    window.scrollTo(0, 0);
    await fetchCarosal();

    let response = await Axios.get(
      process.env.REACT_APP_API_URL + "/page/home"
    );
    props.setSections(response.data.sections);

    let ids = response.data.sections.map((_, idx) => idx);
    setSections(
      <div className="section">
        {ids.length > 0
          ? ids.map((idx) => <Section key={idx} sectionIdx={idx}></Section>)
          : ""}
      </div>
    );
  };
  useEffect(() => {
    fetchHome();
  }, []);

  useEffect(() => {
    if (sections) {
      serIsLoading(false);      
    }
  }, [sections]);
  return (
    <div className="App">
      <div className="blockDiv">
        {isLoading ? (
          <div className="loader">
            <Loader></Loader>
          </div>
        ) : (
          <CarosalMain type={1}>
            <CarosalSlider />
            {sections}
            <Footer />
          </CarosalMain>
        )}{" "}
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
