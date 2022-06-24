import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/user.service";

export class UserController {
  constructor(private readonly userService: UserService) {
    this.userService = userService;
  }

  createUser = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email } = req.body;

    return await this.userService
      .createUser({ name, email })
      .then((user) => res.status(201).json({ user }))
      .catch((error) => res.status(500).json({ error }));
  };

  fetchUser = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.userId;

    return await this.userService
      .fetchUser(userId)
      .then((user) =>
        user
          ? res.status(200).json({ user })
          : res.status(404).json({ message: "not found" })
      )
      .catch((error) => res.status(500).json({ error }));
  };

  fetchAll = async (req: Request, res: Response, next: NextFunction) => {
    return await this.userService
      .fetchAll()
      .then((users) => res.status(200).json({ users }))
      .catch((error) => res.status(500).json({ error }));
  };

  updateUser = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.userId;

    return await this.userService
      .updateUser(userId, req.body)
      .then((user) => res.status(201).json({ user }))
      .catch((error) => res.status(500).json({ error }));
  };

  deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.userId;
    return await this.userService
      .deleteUser(userId)
      .then((user) =>
        user
          ? res.status(201).json({ user, message: "Deleted" })
          : res.status(404).json({ message: "not found" })
      )
      .catch((error) => res.status(500).json({ error }));
  };
}
