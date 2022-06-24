"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config/config");
const errorHandler_1 = require("./middleware/errorHandler");
const app_routes_1 = __importDefault(require("./routes/app.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const post_routes_1 = __importDefault(require("./routes/post.routes"));
const post_comment_route_1 = __importDefault(require("./routes/post.comment.route"));
const logger_1 = __importDefault(require("./utils/logger"));
const app = (0, express_1.default)();
const port = config_1.config.server.port || 1337;
/** Connect to Mongo **/
mongoose_1.default
    .connect(config_1.config.mongo.url, { retryWrites: true, w: "majority" })
    .then(() => {
    logger_1.default.info("Mongo connected!");
    StartServer();
})
    .catch((error) => {
    logger_1.default.error(error);
});
/** Connect to server if Mongoose connects **/
const StartServer = () => {
    /** Log the request */
    app.use((req, res, next) => {
        /** Log the req */
        logger_1.default.info(`Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
        res.on("finish", () => {
            /** Log the res */
            logger_1.default.info(`Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`);
        });
        next();
    });
    // Middleware: body-parser
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(express_1.default.json());
    // Route handlers
    app.use("/api", app_routes_1.default);
    app.use("/api/user", user_routes_1.default);
    app.use("/api/post", post_routes_1.default);
    app.use("/api/postcomment", post_comment_route_1.default);
    // 404 error handling
    app.use(errorHandler_1.notFoundHandler);
    // Error handler
    app.use(errorHandler_1.errorHandler);
    /** Healthcheck */
    app.get("/ping", (req, res, next) => res.status(200).json({ server: true }));
};
app.listen(port, () => {
    logger_1.default.info(`App is running on port: ${port}`);
});
