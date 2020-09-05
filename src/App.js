import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home"
import { connect } from "react-redux";
import { ADD_THUMBNAILS, ADD_TRENDS, ADD_GENRES } from "./redux/actions";

import axios from "axios";


function App(props) {

  useEffect(() => {
    
    let fetchData = async()=>{
      console.log("data");
      let response = await axios.get(
        process.env.REACT_APP_API_URL + "/trending/all/week"
      );
      let trends = response.data.results;
      props.setTrends(trends)
  
      let thumbnails = trends.reduce(
        (total, current) => [
          ...total,
          process.env.REACT_APP_IMAGE_BASE_URL + current.poster_path,
        ],
        []
      );
      props.setThumbnails(thumbnails);
      console.log(thumbnails); 
    }
    let fetchGenres = async()=>{
      console.log("genre");

      let response = await axios.get(
        process.env.REACT_APP_API_URL + "/genre/movie/list"
      );
      // console.log(response.data.genres);
      // let trends = response.data.results;
      props.setGenres(response.data.genres)

      fetchData()
    }
  
    console.log("ssssss");
    fetchGenres();
    }, []);

  

  return (
    <div className="App">
      <Navbar />
      <Home/>

      {/* <div className="blockDiv">
        <CarosalMain
          vipHidden={true}
          sessionHidden={false}
          sessionNo="1"
          mainInfo="فنان  ، فنان "
          description=" تخضع كانج ميراي لعملية تجميلية للحصول على الشكل الذي طالما
                  حلمت به، ولكن عندما تقع في حب دو كيانج سيوك الكاره للعمليات
                  التجميلية، تجد نفسها أمام تحد جديد."
          mainImgSrc="https://shahidstatic3.akamaized.net/mediaObject/slider/Ihsan/Thumbs-5/Sakoon_Jamila_Slider_Hero_New/original/Sakoon_Jamila_Slider_Hero_New.jpg?height=432&width=768&croppingPoint=&version=1&type=webp"
          thumbnailSrc="https://shahidstatic1.akamaized.net/mediaObject/New-Thumbs/Karim2020-22/Sakon-jamlia-logo/original/Sakon-jamlia-logo.png?height=&width=345&croppingPoint=mc&version=1&type=png"
        />
      </div>
      <div className="section">
        <Section />
        <Section />
        <Section />
        <Section />
        <Footer/>

      </div> */}

    </div>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {
    setThumbnails: (thumbnails) =>
      dispatch({ type: ADD_THUMBNAILS, payload: { thumbnails: thumbnails } }),
      setTrends: (trends) =>
      dispatch({ type: ADD_TRENDS, payload: { trends: trends } }),
      setGenres: (genres) =>
      dispatch({ type: ADD_GENRES, payload: { genres: genres } }),
  };
};

export default connect(null, mapDispatchToProps)(App);
// export default App;
