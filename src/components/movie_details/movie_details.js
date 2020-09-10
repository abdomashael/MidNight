import Styles from "./movie_details.module.css";
import React, { useEffect, useState, useRef } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import CarosalMain from "../carosal_main/carosal_main";
import { ADD_Carosal_DATA } from "../../redux/actions";
import { connect } from "react-redux";
import Loader from "../loader/loader";
import carosal_main from "../carosal_main/carosal_main";
import Footer from "../footer/footer";

const MovieDetails = (props) => {
  let { id } = useParams();
  const [youtubeHide, setYoutubeHide] = useState(true);
  const [extraData, setExtraData] = useState({});
  let youtubeDivRef = useRef("");
  let carosalMainRef = useRef(null);
  useEffect(() => {
    const getDetails = async () => {
      const response = await Axios.get(
        process.env.REACT_APP_API_URL + "/movie/" + id
      );

      let youtube = response.data.videos.results.filter(
        (video) => video.site === "YouTube"
      )[0];

      if (youtube) {
        youtubeDivRef.current.src =
          "https://www.youtube.com/embed/" + youtube.key;
        youtubeDivRef.current.title = youtube.name;
        setYoutubeHide(false);
      }
      // console.log("response.data",response.data);
      setExtraData(response.data);
    };
    getDetails();
  }, []);
  return (
    <div>
      <div ref={carosalMainRef}>
        <CarosalMain extraData={extraData}>
          {" "}
          <div>
            <iframe
              hidden={youtubeHide}
              // onLoadedData={<Loader/>}
              className={Styles.iframe}
              ref={youtubeDivRef}
              title={"name"}
              allowFullScreen={true}
              frameborder="0"
            ></iframe>
          </div>
          <Footer />
        </CarosalMain>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSideInfoData: (data) =>
      dispatch({ type: ADD_Carosal_DATA, payload: { data: data } }),
  };
};

export default connect(null, mapDispatchToProps)(MovieDetails);
