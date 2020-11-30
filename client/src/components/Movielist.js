import React, { useState, useEffect } from "react";
import "../css/App.css";
import { Box } from "@material-ui/core";
import { getPopular } from "../requests/gets";


function MovieList({ setMovie }) {
    useEffect(() => {
        fetchItems();
    }, []);
    // useEffect ==> it only going to run when the component mounts

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        let popularMovies = await getPopular()
        setItems(popularMovies);
    };
    return (
        <Box flexWrap="wrap" display="flex">
            <div className="MovList">
                {items.map((results) => (
                    <Box id="BoxStyle">
                        <div>
                            <div className="container">
                                <div className="vertical-center">
                                    <h1 key={results.title}>
                                        <div
                                            onClick={() =>
                                                setMovie(results.title)
                                            }
                                        >
                                            {results.title}
                                        </div>
                                    </h1>
                                </div>
                            </div>
                            <img
                                onClick={() => setMovie(results.title)}
                                src={
                                    " https://image.tmdb.org/t/p/w220_and_h330_face" +
                                    results.poster_path
                                }
                                alt="no "
                                style={{ width: "200px" }}
                            />
                        </div>
                    </Box>
                ))}
            </div>
        </Box>
    );
}

export default MovieList;
