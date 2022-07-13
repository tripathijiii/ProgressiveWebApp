fetch("https://api.github.com/users/google/repos")
.then(function(response){
    response.json().then(function(json){
        console.log(json)
    })
});