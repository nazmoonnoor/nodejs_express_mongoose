import express from "express";
import mongoose from "mongoose";
import { config } from "./config/config";
import { errorHandler, notFoundHandler } from "./middleware/errorHandler";
import appRoutes from "./routes/app.routes";
import userRoutes from "./routes/user.routes";
import postRoutes from "./routes/post.routes";
import postCommentRoutes from "./routes/post.comment.route";
import logger from "./utils/logger";

const app = express();

const port = config.server.port || 1337;

/** Connect to Mongo **/
mongoose
  .connect(config.mongo.url, { retryWrites: true, w: "majority" })
  .then(() => {
    logger.info("Mongo connected!");
    StartServer();
  })
  .catch((error) => {
    logger.error(error);
  });

/** Connect to server if Mongoose connects **/
const StartServer = () => {
  /** Log the request */
  app.use((req, res, next) => {
    /** Log the req */
    logger.info(
      `Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`
    );

    res.on("finish", () => {
      /** Log the res */
      logger.info(
        `Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`
      );
    });

    next();
  });

  // Middleware: body-parser
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // Route handlers
  app.use("/api", appRoutes);
  app.use("/api/user", userRoutes);
  app.use("/api/post", postRoutes);
  app.use("/api/postcomment", postCommentRoutes);

  // 404 error handling
  app.use(notFoundHandler);

  // Error handler
  app.use(errorHandler);

  /** Healthcheck */
  app.get("/ping", (req, res, next) => res.status(200).json({ server: true }));
};

app.listen(port, () => {
  logger.info(`App is running on port: ${port}`);
});
