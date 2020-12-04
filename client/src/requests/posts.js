import { getMovie } from "./gets";

const serverURL = "http://localhost:8000"; // comment this line for npm run build
 //const serverURL = '' // comment this line for npm run start
export async function createNewWarning(warnings) {
  for (let warning of warnings) {
    fetch(serverURL + "/api/warning/create", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        warning: {
          userID: warning.userID,
          movieID: warning.movieID,
          categoryID: warning.categoryID,
          frequencyID: warning.frequencyID,
          typeID: warning.typeID,
          severityID: warning.severityID,
        },
      }),
    });
  }
}

export async function addResource(type, newResource) {
  let data;
  if (type === "category") {
    data = JSON.stringify({ title: newResource.title });
  } else {
    data = JSON.stringify({
      title: newResource.title,
      value: newResource.value,
    });
  }
  fetch(serverURL + `/api/${type}/create`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: data,
  });
}

export async function removeResource(type, newResource) {
  let data;

  data = JSON.stringify({ title: newResource.title });

  fetch(serverURL + `/api/${type}/delete`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: data,
  });
}

export async function addUser(newUsername, newEmail, newPassword) {
  fetch(serverURL + "/api/user/create", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: newUsername,
      email: newEmail,
      password: newPassword,
    }),
  });
}

export async function addMovie(tmdbID, movieName) {
  // check if movie is in database already
  try {
    const res = await getMovie(tmdbID);
    return res._id;
  } catch {
    const response = fetch("http://localhost:8000/api/movie/create", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: movieName, tmdb: tmdbID }),
    });
    const data = await response;
    const addedMovie = await data.json();

    return addedMovie._id;
  }
}
