import React, { Component } from "react";
// import SearchMovie from "./components/SearchMovie";
import ViewMovieInfo from "./components/viewMovieInfo";
import AddWarning from './components/addWarning'
import "./css/App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* <ViewMovieInfo /> */}
                <AddWarning />
            </div>
        );
    }
}

export default App;
