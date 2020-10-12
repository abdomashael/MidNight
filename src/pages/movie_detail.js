import React, { useEffect, useState } from "react";
import Footer from "../components/footer/footer";
import MovieDetails from "../components/movie_details/movie_details";
import Sort from "../components/sort/sort";

const MovieDetailsPage = (props) => {
  return (
    <div>
      <MovieDetails type={props.type}>
        <Footer />
      </MovieDetails>
    </div>
  );
};

export default MovieDetailsPage;
