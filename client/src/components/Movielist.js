import React, { useState, useEffect } from "react";
import "../css/App.css";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";

//import { useState } from 'react';

function MovieList({setMovie}) {
  useEffect(() => {
    fetchItems();
  }, []);
  // useEffect ==> it only going to run when the component mounts

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=fb1465a6d4ccc4cd5448d6f97c18f3c1&language=en-US&page=1`
    );
    //       console.log(data)

    const items = await data.json();
    console.log(items.results);
    setItems(items.results);
  };
  return (
    <Box flexWrap="wrap" display="flex">
    <div className="MovList">
      {items.map((results) => (
        <Box id="BoxStyle">
        <div>
          <div className="container">
            <div className="vertical-center">
              <h1  key={results.title}>
                  <div onClick={() => setMovie(results.title)}>{results.title}</div>
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
