const express = require("express");

const morgan = require("morgan");

const app = express()

//app.use allows for different middleware to be brought into Express
app.use(morgan("dev"))
app.use(express.json())

//how to call to the router for express
const indexRoute = express.Router();

const indexRouteMiddleware = (request, response, nextFunction) =>{
  console.log("I got called first");
  return nextFunction();
}

const indexRouteMiddleware2 = (request, response, nextFunction) =>{
console.log("I got called second")
  response.json({status:200, data: [], message:"Hello from the express world"})
}

//how to configure a route for express
indexRoute.route("/").get(indexRouteMiddleware, indexRouteMiddleware2);

app.use("/apis", indexRoute)



//app.listen declares what port the Express application is running on
app.listen(4200)
