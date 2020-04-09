import {Request, Response} from "express";

export function indexController(request: Request, response: Response) {
  return response.json('🤯😬😱');
}