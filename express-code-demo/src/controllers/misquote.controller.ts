import {Response, Request, NextFunction, response} from "express";
import {connect} from "../database";
import {Misquote} from "../interfaces/misquote";

export async function getAllMisquotes(request : Request, response : Response) {
  const mysqlConnection =  await connect();

  const query = "SELECT BIN_TO_UUID(misquoteId) as misquote, misquoteAttribution, misquoteContent, misquoteSubmitter from misquote";

  const [rows]= await mysqlConnection.execute(query);



  return response.json({status: 200, data: rows})
}

export async function insertMisquote(request: Request, response : Response) {
  try {

    console.log(request.body)
    const {misquoteAttribution, misquoteContent, misquoteSubmitter} = request.body;

    const misquote : Misquote = {misquoteId: null, misquoteAttribution, misquoteContent, misquoteSubmitter};

    const mysqlConnection = await connect();

    const mysqlQuery = "INSERT INTO misquote(misquoteId, misquoteAttribution, misquoteContent, misquoteSubmitter) VALUES(UUID_TO_BIN(UUID()), :misquoteAttribution, :misquoteContent, :misquoteSubmitter)";

    const [rows] = await mysqlConnection.execute(mysqlQuery, misquote);
    return response.json({status: 200, message: "misquote created okay"})
  } catch (e) {
    console.log(e)

  }

}

