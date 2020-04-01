# cohort-27-intro-to-express

## Node

- A run time environment that allows for Javascript to be run outside of the browser.
- Released by Google on may 27th 2010 and based on V8 Javascript engine.
    - A Javascript Engine is a program that executes Javascript code
    - The V8 engine is also the core Javascript Engine that Chrome/Chromium uses.
- Node.js is a run time environment not a language.

## Express

- Since Javascript is  an asynchronous single threaded language it is perfect for web servers.
- Express is the most mature Web Application  framework  For Node.js
- Express is the most used Javascript Framework in the world

    [@nestjs/core vs express vs koa vs next vs react | npm trends](https://www.npmtrends.com/express-vs-koa-vs-next-vs-@nestjs/core-vs-react)

- Express is minimalistic and unopinionated.
    - it only comes with what is necessary to run a web server
    - It can be used with any combination of libraries, packages or frameworks.
    - Express does not enforce best practices or required ways of doing things.
- Express is not a damon that is always running on the host like PHP.
- Every single one of you has used express without knowing it.
    - Express powers the webpack dev server.

## Express In Action

to start an express server:

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

Middleware: anything that runs between two distinct layers.