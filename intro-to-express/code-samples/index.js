import express, {Router} from 'express';

const app = express()

//app.listen declares what port the Express application is running on
app.listen(8080)

//app.use allows for different middleware to be brought into Express
app.use(morgan("dev"))

//how to call to the router for express
const indexRoute = Router();

//how to configure a route for express
indexRoute.route("/apis").get((request, response, next) =>{
  return response.json({status:200 })
})