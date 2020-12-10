import React, { useState, useEffect } from "react";
import "../css/App.css";
import { Box } from "@material-ui/core";
import { getPopular } from "../requests/gets";
import { addMovie } from "../requests/posts";

function MovieList({ setMovie, setPage }) {
  useEffect(() => {
    fetchItems();
  }, []);
  // useEffect ==> it only going to run when the component mounts

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    let popularMovies = await getPopular();
    setItems(popularMovies);
  };
  return (
    <Box flexWrap="wrap" display="flex">
      <div className="MovList">
        {items.map((results) => (
          <Box  key={results.title} id="BoxStyle">
            <div>
              <div className="container">
                <div className="vertical-center">
                  <h4>
                    <div onClick={() => setMovie(results.title)}>
                      {results.title}
                    </div>
                  </h4>
                </div>
              </div>
              <img
                onClick={async () => {
                  const id = await addMovie(results.id, results.title);
                  setMovie({ tmdb: results.id, title: results.title, id: id, posterPath:results.poster_path })
                  setPage("MovieInfo");
                }}
                src={
                  " https://image.tmdb.org/t/p/w220_and_h330_face" +
                  results.poster_path
                }
                alt="no "
                style={{cursor:"pointer"}}
              />
            </div>
          </Box>
        ))}
      </div>
      <div onClick={()=> {
        setPage('Admin')
      }}>Admin</div>
    </Box>
  );
}

export default MovieList;
