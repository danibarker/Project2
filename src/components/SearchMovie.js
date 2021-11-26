import React from "react";
import { apiKey } from "./api-key";
import "../css/App.css";

export default class SearchMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            suggestions: [],
            text: "",
        };
    }

    onTextChange = (e) => {
        let suggestions = [];
        const searchValue = e.target.value;
        let searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchValue}&page=1&include_adult=false`;
        const req = new Request(searchURL, {
            method: "GET",
        });
        fetch(req)
            .then((response) => response.json())
            .then((data) => {
                if (data.results) {
                    data.results.forEach((movie) => {
                        if (suggestions.length < 6) {
                            suggestions.push(movie.original_title);
                        }
                    });
                }
            })
            .then(() => {
                this.setState(() => ({
                    suggestions
                }));
            });
        this.setState(() => ({
            text: searchValue,
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
                <h2>MovieFy</h2>
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
