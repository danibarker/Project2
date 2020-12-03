import React, { useState } from "react";
import "./css/App.css";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchMovie";
import Movielist from "./components/Movielist";
import ViewMovieInfo from "./components/viewMovieInfo";
import { getAllResource } from "./requests/gets";
import AddWarning from "./components/addWarning";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Thanks from "./components/Thanks";
import Admin from './components/Admin'
export default function App() {
    let [currentPage, setCurrentPage] = useState("Navigation");
    let [selectedMovie, setSelectedMovie] = useState("");
    let [resourceList, setResourceList] = useState([]);
    const Home = () => {
        console.log(selectedMovie.length);

        switch (currentPage) {
            case "Thanks":
                return (
                    <>
                        <Thanks setCurrentPage={setCurrentPage} />
                    </>
                );
            case "Navigation":
                return (
                    <div>
                        <button
                            onClick={() => {
                                setCurrentPage("AddWarning");
                            }}
                        >
                            Go to AddWarning Component
                        </button>
                        <br />
                        <button
                            onClick={() => {
                                setCurrentPage("SearchMovie");
                            }}
                        >
                            Go to Main Page Component
                        </button>
                        <br />
                        <button
                            onClick={() => {
                                setCurrentPage("MovieInfo");
                            }}
                        >
                            Go to Movie Info Component
                        </button>
                        <br />
                        <button
                            onClick={() => {
                                setCurrentPage("SignIn");
                            }}
                        >
                            Go to Sign In Component
                        </button>
                        <br />
                        <button
                            onClick={() => {
                                setCurrentPage("SignUp");
                            }}
                        >
                            Go to Sign Up Component
                        </button>
                        <br />
                        <button
                            onClick={() => {
                                setCurrentPage("Admin");
                            }}
                        >
                            Go to Admin Component
                        </button>
                        <br />
                    </div>
                );

            case "AddWarning":
                return (
                    <AddWarning
                        setCurrentPage={setCurrentPage}
                        movieTitle={"The Lion King"}
                        movieID={"5fc1e881f7d9654d5c99ad9d"}
                        userID={"5fc68a121262f52c7006d209"}
                    />
                );

            case "SearchMovie":
                return (
                    <div className="App">
                        <SearchBar setMovie={setSelectedMovie} />

                        <Movielist setMovie={setSelectedMovie} />
                    </div>
                );

            case "MovieInfo":
                return (
                    <div>
                        <SearchBar setMovie={setSelectedMovie} />
                        <ViewMovieInfo movieID={selectedMovie} />
                        <button onClick={() => setSelectedMovie("")}>
                            Go back to search
                        </button>
                    </div>
                );

            case "SignIn":
                return <Login />
                
            case "SignUp":
                return <SignUp />;

            case "Admin":
                return <Admin />;

            default:
                return <h1>Error</h1>;
        }
    };
    return (
        <>
            <NavBar setCurrentPage={setCurrentPage} />
            <Home />
        </>
    );
}
