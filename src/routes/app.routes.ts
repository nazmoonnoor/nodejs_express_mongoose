import express from "express";
import { AppController } from "../controllers/app.controller";
import { use } from "../middleware/errorHandler";

const router = express.Router();
const controller = new AppController();

router.get("/healthcheck", controller.healthcheck);

router.get("/seed", use(controller.seed));

export default router;
