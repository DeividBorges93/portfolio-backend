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
    this.api.use(express.json());
    this.api.use(cors());
  }

  private routes():void {
    this.api.use(messageRoutes);
    this.api.use(errorMiddleware);
  }
  public start(PORT: string | number):void {
    this.api.listen(PORT, () => console.log(`Running on port ${PORT}`));
  };

}