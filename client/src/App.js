import React, { useState } from "react";
// import { FaAlignRight } from "react-icons/fa";
import "./css/App.css";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchMovie";
// import SignIn from './components/SignIn';
// import SignUp from './components/SignUp';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movielist from "./components/Movielist";
import MovieDetail from "./components/MovieDetail";
import ViewMovieInfo from "./components/viewMovieInfo";

export default function App() {
    let [selectedMovie, setSelectedMovie] = useState("");

    const Home = () => {
        console.log(selectedMovie.length);
        if (!selectedMovie) {
            return (
                <div className="App">
                    <SearchBar setMovie={setSelectedMovie} />

                    <Movielist setMovie={setSelectedMovie} />
                </div>
            );
        } else {
            return (
                <div>
                    <SearchBar setMovie={setSelectedMovie} />
                    <ViewMovieInfo movieID={selectedMovie} />
                    <button onClick={() => setSelectedMovie("")}>
                        Go back to search
                    </button>
                </div>
            );
        }
    };
    return (
        <>
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    {/* <Route path= "/SignIn"  component={SignIn} />
          <Route path= "/SignUp"  component={SignUp} /> */}
                    <Route path="/:id" component={MovieDetail} />
                </Switch>
            </Router>
        </>
    );
}
