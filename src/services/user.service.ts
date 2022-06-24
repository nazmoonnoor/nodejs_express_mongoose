import User from "../models/user.model";

export class UserService {
  createUser = async (opts: any) => {
    const user = new User({
      name: opts && opts.name,
      email: opts && opts.email,
    });
    return await user.save();
  };

  fetchUser = async (userId: string) => {
    return await User.findById(userId);
  };

  fetchAll = async () => await User.find();

  updateUser = async (userId: string, data: any) => {
    return await User.findById(userId).then((user) => {
      if (user) {
        user.set(data);
        return user.save();
      } else {
        throw new Error("not found!");
      }
    });
  };

  deleteUser = async (userId: string) => await User.findByIdAndDelete(userId);
}
