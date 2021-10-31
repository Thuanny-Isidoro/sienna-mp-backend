const express = require("express");
const app = express()

app.get("/",function (
        request,
        response){
    if(request.statusCode === 404){
        response.send("<h1>page not found</h1>")
    }
    else { response.send("<h1>Welcome to my webpage</h1>")}
})

app.get("/usr/:name", function (
        request,
        response) {
    let name = request.params.name
    response.send(`<h1>Welcome, ${name}!`)
})

app.listen(4000, function (erro){
    if(erro){
        console.log("error...")
    }
    else {
        console.log("server started")
    }
})
