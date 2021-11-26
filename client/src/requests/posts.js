import { getMovie } from "./gets";

const serverURL = "http://localhost:8000"; // comment this line for npm run build
// const serverURL = '' // comment this line for npm run start
export async function createNewWarning(warnings, token) {
  for (let warning of warnings) {
    const headers = new Headers({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    });
    const request = new Request(serverURL+"/api/warning/create", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        warning: {
          userID: warning.userID,
          movieID: warning.movieID,
          categoryID: warning.categoryID,
          frequencyID: warning.frequencyID,
          typeID: warning.typeID,
          severityID: warning.severityID,
          comment:warning.comment
        },
      }),
    });
    fetch(request);
  }
}

export async function addResource(type, newResource, token) {
  let data;
  if (type === "category") {
    data = JSON.stringify({ title: newResource.title });
  } else {
    data = JSON.stringify({
      title: newResource.title,
      value: newResource.value,
    });
  }
  const headers = new Headers({
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json"
  });
  const request = new Request(serverURL+`/api/${type}/create`, {
    method: "POST",
    headers: headers,
    body: data,
  });
  fetch(request);
}

export async function removeResource(type, newResource, token) {
  let data;

  data = JSON.stringify({ title: newResource.title });
  const headers = new Headers({
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json"
  });
  const request = new Request(serverURL + `/api/${type}/delete`, {
    method: "POST",
    headers: headers,
    body: data,
  });
  fetch(request);
}

export async function addUser(newUsername, newEmail, newPassword) {

  let response = await fetch(serverURL + "/api/user/create", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: newUsername,
      email: newEmail,
      password: newPassword,
    }),
  });

  let data = await response.json();
  let message = JSON.stringify(data)

  if (response.status === 200) {
  
    //let data = await response.json()
    return message
  } else {
    //throw new Error(error)
    throw new Error(message)
  } 
}
export async function checkAdmin(token) {
  const headers = new Headers({
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json"
  });
  const request = new Request(serverURL + `/api/user/isadmin`, {
    method: "POST",
    headers: headers,
  });
  let response = await fetch(request)
  let isAdmin = await response.text()

  return isAdmin==="true"
}
export async function updateUser(curUsername, newEmail, newPassword, token) {
  try {
    let response = await fetch(serverURL + "/api/user/update", {
      method: "post",
      headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        email: newEmail,
        password: newPassword,
      }),
    });

    let data = await response.json();
    let message = JSON.stringify(data)

    if (response.status === 200) {
      return message
    } else {
      //throw new Error(error)
      throw new Error(message)
    }
  } catch (error) {
    console.log(error)
  }
}

export async function removeUser(username, token) {
  try {
    const headers = new Headers({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    });
    const request = new Request(serverURL + `/api/user/delete`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        username: username,
      }),
    });
    let response = await fetch(request);
    let data = response.json();
    return data;
  } catch (error) {
    return error;
  }
}
export async function addMovie(tmdbID, movieName) {
  // check if movie is in database already
  try {
    const res = await getMovie(tmdbID);
    return res._id;
  } catch {
    const response = fetch(serverURL + "/api/movie/create", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: movieName, tmdb: tmdbID }),
    });
    const data = await response;
    const addedMovie = await data.json();

    return addedMovie._id;
  }
}
export function userLogout(token) {
  fetch(serverURL + "/api/user/logout", {
    method: "post",
    headers: {"Content-Type":"application/json", "Authorization":"Bearer "+token}
  })
}
export async function userLogin(username, password) {
    
    let response = await fetch(serverURL + "/api/user/login", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    });
    if (response.status === 200) {
        let data = await response.json()
        return data
    } else {
        let error = await response.text()
        throw new Error(error)
    }
        
        
    

}