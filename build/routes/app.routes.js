"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_controller_1 = require("../controllers/app.controller");
const errorHandler_1 = require("../middleware/errorHandler");
const router = express_1.default.Router();
const controller = new app_controller_1.AppController();
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
router.get("/seed", (0, errorHandler_1.use)(controller.seed));
exports.default = router;
