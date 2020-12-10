import React from "react";
import "../css/App.css";
import { useState } from "react";
import { searchTMDB } from "../requests/gets";
import { addMovie } from "../requests/posts";

export default function SearchMovie({ setPage, setMovie }) {
   
    const [results, setResults] = useState([]);

    async function getResults(text) {
        let suggestions = await searchTMDB(text);
        console.log(suggestions)
        setResults(suggestions);
    }
    return (
        <div id="search-bar">
            <input
                id="query"
                type="text"
                onChange={(event) => {
                    getResults(event.target.value);
                }}
                placeholder="Search"
            />
            {results.map((result) => (
                <li key={result.id} onClick={async () => {
                    const id = await addMovie(result.id, result.title)
                    setMovie({ tmdb: result.id, title: result.title, id: id , posterPath:result.poster_path})
                    setPage("MovieInfo")
                }
                }>{result.title} {result.release_date ? "(" + result.release_date.split('-')[0] + ")" : ""}</li>
            ))}
        </div>
    );
}
