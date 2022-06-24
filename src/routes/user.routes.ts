import express from "express";
import { UserController } from "../controllers/user.controller";
import { Schemas, ValidateJoi } from "../middleware/joi";
import { UserService } from "../services/user.service";

const router = express.Router();

const userService = new UserService();
const userController = new UserController(userService);

router.post(
  "/create",
  ValidateJoi(Schemas.user.create),
  userController.createUser
);
router.get("/get/:userId", userController.fetchUser);
router.get("/get", userController.fetchAll);
router.patch(
  "/update/:userId",
  ValidateJoi(Schemas.user.update),
  userController.updateUser
);
router.delete("/delete/:userId", userController.deleteUser);

export default router;
