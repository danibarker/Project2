import React from "react";
import "../css/App.css";
import { useState } from "react";
import { searchTMDB } from "../requests/gets";

export default function SearchMovie({ setMovie }) {
   
    const [results, setResults] = useState([]);

    async function getResults(text) {
        let suggestions = await searchTMDB(text);
        console.log(suggestions)
        setResults(suggestions);
    }
    return (
        <div id="notebooks">
            <input
                id="query"
                type="text"
                onChange={(event) => {
                    getResults(event.target.value);
                }}
                placeholder="Search"
            />
            {results.map((movie) => (
                <li onClick={() => setMovie(movie)}>{movie}</li>
            ))}
        </div>
    );
}
