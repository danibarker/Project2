import React from "react";
import "../css/App.css";
import  { useState } from 'react';

const serverURL = process.env.DATABASE_URL ? '' : 'http://localhost:3000'



export default function SearchMovie({ setMovie }) {
    console.log(setMovie)
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
    return (
        <div id="notebooks">
            
            <input
                id="query"
                type="text"
                onChange={(event) => { getResults(event.target.value) }}
                placeholder="Search"
            />
            {results.map((movie) => (<li onClick={()=>setMovie(movie)}>{movie}</li>))}
        </div>
    );
}