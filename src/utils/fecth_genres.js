import Axios from "axios";

const fetchGenres = async (props) => {

  let response = await Axios.get(
    process.env.REACT_APP_API_URL + "/genre/movie/list"
  );
  // let trends = response.data.results;
  return response.data.genres;
};


export default fetchGenres;
