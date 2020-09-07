import Axios from "axios";

const fetchGenres = async (props) => {
  console.log("genre");

  let response = await Axios.get(
    process.env.REACT_APP_API_URL + "/genre/movie/list"
  );
  console.log("fetchGenres", response.data.genres);
  // let trends = response.data.results;
  return response.data.genres;
};


export default fetchGenres;
