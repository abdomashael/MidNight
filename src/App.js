import React, {useEffect} from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Movies from "./pages/movies/movies";
import Series from "./pages/series";

import Soon from "./components/comming_soon/soon";

import {connect} from "react-redux";
import {ADD_THUMBNAILS, ADD_TRENDS, ADD_GENRES} from "./redux/actions";

import axios from "axios";

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Footer from "./components/footer/footer";
import MovieDetailsPage from "./pages/movie_detail";
import Auth from "./pages/auth/auth";
import Profile from "./pages/profile/profile";
import {fetchGenres as FetchGenres} from "./utils/API";

function App(props) {
    const fetchGenres = async () => {
        const genres = await FetchGenres();
        props.setGenres(genres);
    };
    useEffect(() => {
        fetchGenres();
    }, []);

    return (
        <div>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/movies">
                        {/* <Soon/> */}
                        <Movies type={"movie"}/>
                    </Route>
                    <Route path="/movie/:id">
                        {/* <Soon/> */}
                        <MovieDetailsPage/>
                    </Route>

                    <Route path="/series/:id">
                        <MovieDetailsPage type={"series"}/>

                    </Route>
                    <Route path="/series">
                        {/*<Soon />*/}
                        <Series/>
                    </Route>
                    <Route path="/auth">
                        <Auth/>
                        {/* <Series /> */}
                    </Route>
                    <Route path="/profile">
                        <Profile/>
                        {/* <Series /> */}
                    </Route>
                    <Route exact path="/">
                        <Home/>
                    </Route>

                    <Route path="*">
                        <Soon/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        setGenres: (genres) =>
            dispatch({type: ADD_GENRES, payload: {genres: genres}}),
    };
};

export default connect(null, mapDispatchToProps)(App);
// export default App;
