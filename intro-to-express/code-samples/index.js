const express = require("express");

const morgan = require("morgan");

const app = express()



//app.use allows for different middleware to be brought into Express
app.use(morgan("dev"))
app.use(express.json())

//how to call to the router for express
const indexRoute = express.Router();

//how to configure a route for express
indexRoute.route("/").get((request, response, next) =>{
  return response.json({status:200 })
})

app.use("/apis", indexRoute)



//app.listen declares what port the Express application is running on
app.listen(4200)