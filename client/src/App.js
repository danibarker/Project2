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
import { getAllResource } from "./requests/gets";
import AddWarning from "./components/addWarning";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

export default function App() {
    let [currentPage, setCurrentPage] = useState('Navigation')
    let [selectedMovie, setSelectedMovie] = useState("");
    let [resourceList, setResourceList]= useState([])
    const Home = () => {
        console.log(selectedMovie.length);

        switch (currentPage) {
            case "Navigation":
                return (<div>
                    <button onClick={() => { setCurrentPage('AddWarning') }}>Go to AddWarning Component</button><br />
                    <button onClick={() => { setCurrentPage('SearchMovie') }}>Go to Main Page Component</button><br />
                    <button onClick={() => { setCurrentPage('MovieInfo') }}>Go to Movie Info Component</button><br />
                    <button onClick={() => { setCurrentPage('SignIn') }}>Go to Sign In Component</button><br />
                    <button onClick={() => { setCurrentPage('SignUp') }}>Go to Sign Up Component</button><br />
                    <button onClick={() => { setCurrentPage('Admin') }}>Go to Admin Component</button><br />
                </div>)
                break
            case "AddWarning":
                return (<AddWarning />)
                break
            case "SearchMovie":
                    return (
                        <div className="App">
                            <SearchBar setMovie={setSelectedMovie} />

                            <Movielist setMovie={setSelectedMovie} />
                        </div>
                );
                break
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
                break
            case "SignIn":
                return <SignIn />
                break
            case "SignUp":
                return <SignUp />
                break
            case "Admin":
                return (<><input id="hello" /><button onClick={async () => {
                 let resources = await getAllResource(document.getElementById('hello').value)
                 setResourceList(resources)
             }}>Get Stuff</button><br />{resourceList.map((resource) => <div>{JSON.stringify(resource)}</div>)}</>);
                break
            default:
                return <h1>Error</h1>
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
