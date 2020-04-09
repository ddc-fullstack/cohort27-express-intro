import {Router} from "express";
import {indexController} from "../controllers/index.controller";
import {getAllMisquotes, insertMisquote} from "../controllers/misquote.controller";

export const misquoteRoute = Router()
console.log("router", misquoteRoute);

misquoteRoute.route("/")
  .get(getAllMisquotes)
  .post(insertMisquote);