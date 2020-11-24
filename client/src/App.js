import React, { Component } from "react";
// import { FaAlignRight } from "react-icons/fa";
import "./css/App.css";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Movielist from './components/Movielist';
import MovieDetail from './components/MovieDetail'


export default class App extends Component {
  
  render() {

    const Home = () => (
      <div className="App">
        <h1>THE MOVIE WARNING DATABASE</h1>
        <SearchBar />
        <Movielist/>

      </div>
    )
    return (
      <>
      <Router>
        <NavBar />
        <Switch>
          <Route path= "/" exact component={Home} />
          <Route path= "/SignIn"  component={SignIn} />
          <Route path= "/SignUp"  component={SignUp} />
          <Route path= "/:id" component={MovieDetail}/>
        </Switch>
      </Router> 

  
      </>
    );
  }
}

