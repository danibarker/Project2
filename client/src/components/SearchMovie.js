import React from "react";
import "../css/App.css";
import  { useState, useEffect } from 'react';

const serverURL = 'http://localhost:9000'



export default function SearchMovie() {
    
    const [results, setResults] = useState([]);

    async function getResults(text) {
        let suggestions = []
        try {
            const response = await fetch(serverURL + "/tmdb/findMovie?searchValue=" + text, {
                method: "GET",
            });
            const result = await response.json();

            if (result.results) {

                result.results.forEach((movie) => {
                    if (suggestions.length < 6) {
                        suggestions.push(movie.original_title);
                    }
                });
            }

            setResults(suggestions);

        } catch (e) {
            console.log(e);
        }
    }

    function renderResults() {
        let suggestions = results;
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul>
                {suggestions.map((item, index) => (
                    <li key={index} onClick={() => console.log('test')}>
                        {item}
                    </li>
                ))}
            </ul>
        );
    };



    return (
        <div id="notebooks">
            
            <input
                id="query"
                type="text"
                onChange={(event) => { getResults(event.target.value) }}
                placeholder="Search"
            />
            {results.map((movie) => (<div>{movie}<hr /></div>))}
        </div>
    );
}