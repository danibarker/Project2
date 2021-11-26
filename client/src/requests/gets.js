const serverURL = "http://localhost:8000"; //commment this line out for npm run build
//  const serverURL = '' //comment this line out for npm run start
// Warnings

//get by movie ID
export async function getWarnings(movieID) {
    try {
        const response = await fetch(
            serverURL + "/api/warnings?movieID=" + movieID
        );
        const result = await response.json();

        return result;
    } catch (e) {
        console.log(e);
    }
}

// Search TMDB
export async function searchTMDB(searchValue) {
    console.log("searchvalue", searchValue);
    let suggestions = [];
    try {
        const response = await fetch(
            serverURL + "/tmdb/findMovie?searchValue=" + searchValue,
            {
                method: "GET",
            }
        );
        const result = await response.json();

        if (result.results) {
            result.results.forEach((movie) => {
                if (suggestions.length < 6) {
                    suggestions.push({ release_date: movie.release_date, title: movie.original_title, id: movie.id, poster_path:movie.poster_path });
                }
            });
        }
    } catch (e) {
        console.log(e);
    }
    return suggestions;
}
export async function getTMDB(tmdb) {
    console.log(tmdb)
    const data = await fetch(serverURL + "/tmdb/getMovie?tmdb=" + tmdb)
    const movie = await data.json();
    return movie
}
export async function getPopular() {
    const data = await fetch(serverURL + "/tmdb/popularMovies");

    const items = await data.json();
    return items.results;
}

export async function getAllResource(type) {
    const response = await fetch(serverURL + `/api/${type}`)
    const resource = await response.json();
    return resource
}

export async function getOneResourceByID(type, id) {
    const response = await fetch(serverURL + `/api/${type}/${id}`)
    const resource = await response.json();
    return resource
}

export async function getUser(userName) {
    const response = await fetch(serverURL + `/api/user/${userName}`)
    const resource = await response.json();
    return resource
}

export async function getMovie(tmdbID) {
    const response = await fetch(serverURL + `/api/movie/${tmdbID}`)
    const resource = await response.json();
    return resource
}