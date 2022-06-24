import express from "express";
import { AppController } from "../controllers/app.controller";
import { use } from "../middleware/errorHandler";

const router = express.Router();
const controller = new AppController();

// Routes
/**
 * @swagger
 * /healthcheck:
 *  get:
 *    description: Use to check if server is running
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/healthcheck", controller.healthcheck);

/**
 * @swagger
 * /seed:
 *  get:
 *    description: Use to seed the test data
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/seed", use(controller.seed));

export default router;
