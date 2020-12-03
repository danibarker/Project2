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
                <li onClick={async () => {
                    const id = await addMovie(movie.id, movie.title)
                    setMovie({ title: movie.title, id: id })
                    setPage("MovieInfo")
                }
                }>{movie.title}</li>
            ))}
        </div>
    );
}
