function searchMovies() {
    let searchValue = document.getElementById("searchBox").value;
    let searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchValue}&page=1&include_adult=false`;
    const req = new Request(searchURL, {
        method: "GET",
    });
    fetch(req)
        .then((response) => response.json())
        .then((data) => {
            const movieList = document.getElementById("movieList");
            movieList.innerHTML = "";
            data.results.forEach((movie) => {
                console.log(movie);
                const movieImg = document.createElement("img");
                movieImg.classList.add("img");
                if (movie.poster_path) {
                    movieImg.setAttribute(
                        "src",
                        `https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`
                    );
                }
                const movieLi = document.createElement("div");
                
                movieLi.innerHTML = movie.original_title+'<br />';
                movieLi.appendChild(movieImg);
                movieList.appendChild(movieLi);
            });
        });
}
