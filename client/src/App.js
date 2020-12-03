import React, { useState } from "react";
import "./css/App.css";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchMovie";
import Movielist from "./components/Movielist";
import ViewMovieInfo from "./components/MovieInfo";
import { getAllResource } from "./requests/gets";
import AddWarning from "./components/AddWarning";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Thanks from "./components/Thanks";
import Admin from './components/Admin'
export default function App() {
    let [currentPage, setCurrentPage] = useState("Navigation");
    let [selectedMovie, setSelectedMovie] = useState({title: 'The Lion King', id:'5fc1e881f7d9654d5c99ad9d'});
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
                        movieTitle={selectedMovie.title}
                        movieID={selectedMovie.id}
                        userID={"5fc68a121262f52c7006d209"}
                    />
                );

            case "SearchMovie":
                return (
                    <div className="App">
                        <SearchBar setPage={setCurrentPage} setMovie={setSelectedMovie} />

                        <Movielist setPage={setCurrentPage} setMovie={setSelectedMovie} />
                    </div>
                );

            case "MovieInfo":
                return (
                    <div>
                        <ViewMovieInfo setCurrentPage={setCurrentPage} movieTitle={selectedMovie.title} movieID={selectedMovie.id} />
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
            {JSON.stringify(selectedMovie)+currentPage}
            <NavBar setCurrentPage={setCurrentPage} />
            <Home />
        </>
    );
}
