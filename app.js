//import
const express = require('express');
const PORT = 5001;

const routerapi = require("./Routers/ApiRoutes");
//create an instance -- server
const app = express();

//routing
// app.get(path,handler)

/*
app.get("/",(request, response)=>{
    response.status(200).send("Hello im express js home");

})

app.get("/about",(request, response)=>{
    response.status(200).send("Hello im express js about");

})
*/

// inject routes to the app

app.use("/",routerapi);


// creat a port --listerner
app.listen(PORT,()=>{
    console.log("express is running at Port",PORT);

})
