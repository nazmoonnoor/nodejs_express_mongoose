import Post from "../models/post.model";

export class PostService {
  createPost = async (opts: any) => {
    const post = new Post({
      user_id: opts && opts.user_id,
      content: opts && opts.content,
    });
    return await post.save();
  };

  fetchPost = async (postId: string) => {
    return await Post.findById(postId);
  };

  fetchAll = async () => await Post.find();

  updatePost = async (postId: string, data: any) => {
    return await Post.findById(postId).then((post) => {
      if (post) {
        post.set(data);
        return post.save();
      } else {
        throw new Error("not found!");
      }
    });
  };

  deletePost = async (postId: string) => await Post.findByIdAndDelete(postId);
}
