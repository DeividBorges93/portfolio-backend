import cors from "cors";
import 'express-async-errors';
import express from 'express';
import messageRoutes from "../routes/message.routes";
import errorMiddleware from "./middleware/error.middleware";

export class Api {
  public api: express.Express;

  constructor() {
    this.api = express();

    this.config();
    this.routes();
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Methods",
        "GET,POST,DELETE,OPTIONS,PUT,PATCH"
      );
      res.header("Access-Control-Allow-Headers", "*");
      next();
    };

    this.api.use(express.json());
    this.api.use(cors());
    this.api.use(accessControl);
  }

  private routes():void {
    this.api.use(messageRoutes);
    this.api.use(errorMiddleware);
  }
  public start(PORT: string | number):void {
    this.api.listen(PORT, () => console.log(`Running on port ${PORT}`));
  };

}
