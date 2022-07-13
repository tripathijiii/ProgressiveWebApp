fetch("./fetch2.html")
.then(function(response){
    response.text().then(function(html){
        console.log(html)
        document.getElementById('body').innerHTML = html
    })
});