import { Request, Response } from "express";
import seedData from "../utils/seed";
import logger from "../utils/logger";

export class AppController {
  healthcheck = async (req: Request, res: Response) => res.sendStatus(200);

  seed = async (req: Request, res: Response) => {
    await seedData();
    res.sendStatus(200);
  };
}
