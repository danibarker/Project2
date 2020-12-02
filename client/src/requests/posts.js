const serverURL = "http://localhost:3000"; // comment this line for npm run build
// const serverURL = '' // comment this line for npm run start 
export function createNewWarning(warnings){
    for (let warning of warnings) {        
        fetch(serverURL + '/api/warning/create', {                            
            method: 'post',
            headers: {"Content-Type": "application/json"},   
            body: JSON.stringify({warning:{userID:warning.userID,movieID:warning.movieID, categoryID:warning.categoryID, frequencyID:warning.frequencyID, typeID:warning.typeID,severityID:warning.severityID}})                    
        })
    }
}

export function addResource(type,newResource){
    fetch(serverURL + `/api/${type}/create`, {                            
        method: 'post',
        headers: {"Content-Type": "application/json"},   
        body: JSON.stringify({warning:{title: newResource.title, value: newResource.value}})                    
    })
}

export function addUser(newUsername,newEmail,newPassword){
    fetch(serverURL + '/api/user/create', {                            
        method: 'post',
        headers: {"Content-Type": "application/json"},   
        body: JSON.stringify({username:newUsername, email:newEmail,password:newPassword})                    
    })
}

export function addMovie(tmdbId, movieName) {
  fetch(serverURL + '/api/movie/create', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({title: movieName, tmdb: tmdbId})
  })
}
