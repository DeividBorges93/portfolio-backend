import 'express-async-errors';
import express from 'express';

export class Api {
  public api: express.Express;

  constructor() {
    this.api = express();
  }

  public start(PORT: string | number):void {
    this.api.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}