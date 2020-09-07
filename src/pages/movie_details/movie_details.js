import Styles from "./movie_details.module.css";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import CarosalMain from "../../components/carosal_main/carosal_main";
import { ADD_Carosal_DATA } from "../../redux/actions";
import { connect } from "react-redux";

const MovieDetails = (props) => {
  let { id } = useParams();

  const [youtube, setYouTube] = useState({});
  useEffect(() => {
    const getDetails = async () => {
      const response = await Axios.get(
        process.env.REACT_APP_API_URL + "/movie/" + id
      );
      console.log(response.data);
      setYouTube(
        response.data.videos.results.filter(
          (video) => video.site === "YouTube"
        )[0]
      );
    };
    getDetails();
  }, []);
  return (
    <div>
      <CarosalMain/>
      <iframe
        title={youtube.name}
        allowFullScreen={true}
        width="1920"
        height="1080"
        frameborder="0"
        src={"https://www.youtube.com/embed/" + youtube.key}
      ></iframe>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
    return {
      setSideInfoData: (data) =>
        dispatch({ type: ADD_Carosal_DATA, payload: { data: data } }),
    };
  };

export default connect(null,mapDispatchToProps) (MovieDetails);
