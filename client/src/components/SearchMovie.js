import React from "react";

import "../css/App.css";

export default class SearchMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            suggestions: [],
            text: "",
        };
    }

    onTextChange = async (e) => {
        this.setState(() => ({
            text: searchValue,
        }));
        let suggestions = [];
        const searchValue = e.target.value;
        console.log(searchValue);
        const response= await fetch(`http://localhost:3001/tmdb/findMovie?searchValue=${searchValue}`);
        const result= await response.json();
        console.log('the result', result)
        if (result.results){
            result.results.forEach((movie)=>{
                if (suggestions.length<6){
                     suggestions.push(movie.title)
                }
           
        }) 
        }
        

        this.setState(() => ({
            suggestions
        }));
  
        
    };

    selectedText(value) {
        this.setState(() => ({
            text: value,
            suggestions: [],
        }));
    }

    renderSuggestions = () => {
        let { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul>
                {suggestions.map((item, index) => (
                    <li key={index} onClick={() => this.selectedText(item)}>
                        {item}
                    </li>
                ))}
            </ul>
        );
    };

    render() {
        const { text, suggestions } = this.state;
        return (
            <div id="notebooks">
                <h2>The warning movie database</h2>
                <h3>Search the movie content</h3>
                <input
                    id="query"
                    type="text"
                    onChange={this.onTextChange}
                    value={text}
                />
                {this.renderSuggestions()}
                <span>Results: {suggestions.length}</span>
            </div>
        );
    }
}
