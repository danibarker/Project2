const serverURL = "http://localhost:3000";

export default function CreateNewWarning(){
    for (let warning of warnings) {        
        fetch(serverURL + '/api/warning/create', {                            
            method: 'post',
            headers: {"Content-Type": "application/json"},   
            body: JSON.stringify({warning:{userID:warning.user,movieID:warning.movie, categoryID:warning.category, frequencyID:warning.frequency, typeID:warning.type,severityID:warning.severity}})                    
        })
    }
}

export default function AddResource(type,newResource){
    fetch(serverURL + `/api/${type}/create`, {                            
        method: 'post',
        headers: {"Content-Type": "application/json"},   
        body: JSON.stringify({warning:{title: newResource.title, value: newResource.value}})                    
    })
}

export default function AddUserLogin(newUsername,newEmail,newPassword){
    fetch(serverURL + '/api/user/create', {                            
        method: 'post',
        headers: {"Content-Type": "application/json"},   
        body: JSON.stringify({username:newUsername, email:newEmail,password:newPassword})                    
    })
}

export default function AddMovie(tmdbId, movieName) {
  fetch(serverURL + '/api/movie/create', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({title: movieName, tmdb: tmdbId})
  })
}
