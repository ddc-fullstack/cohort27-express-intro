import express, { Application } from 'express';
import morgan from 'morgan';
import { indexRoute } from './routes/index.route';
import {misquoteRoute} from "./routes/misquote.route";

export class App {
  app: Application;

  constructor (private port? : number | string) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  // private method that sets the port for the sever, to one from index.route.ts, and external .env file or defaults to 3000
  private settings () {
    this.app.set('port', this.port || process.env.port || 3000);
  }

  /// private method to setting up the middleware to handle json responses, one for dev and one for prod
  private middlewares () {
    this.app.use(morgan('dev'));
    this.app.use(express.json());
  }

  private routes () {
    this.app.use(indexRoute);
    this.app.use("/apis/misquote", misquoteRoute)
  }

  async listen () : Promise<void> {
    await this.app.listen(this.app.get('port'));
    console.log('Server on port', this.app.get('port'));
  }
}
