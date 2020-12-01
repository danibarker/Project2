const serverURL = "http://localhost:3000";

function CreateNewWarning(){
    for (warning of warnings) {        
        fetch(serverURL + '/api/warning/create', {                            
            method: 'post',
            headers: {"Content-Type": "application/json"},   
            body: JSON.stringify({warning:{userID:warning.user,movieID:warning.movie, categoryID:warning.category, frequencyID:warning.frequency, typeID:warning.type,severityID:warning.severity}})                    
        })
        .then(setWarning(''))    
    }
}

function AddResource(type,newResource){
    fetch(serverURL + '/api/${type}/create', {                            
        method: 'post',
        headers: {"Content-Type": "application/json"},   
        body: JSON.stringify({warning:{title: newResource.title, value: newResource.value}})                    
    })
    .then(setFrequency(''))    
}