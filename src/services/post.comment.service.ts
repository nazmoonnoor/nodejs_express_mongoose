import PostComment from "../models/post.comment.model";

export class PostCommentService {
  createPostComment = async (opts: any) => {
    const postComment = new PostComment({
      user_id: opts && opts.user_id,
      post_id: opts && opts.post_id,
      user_comment: opts && opts.user_comment,
      hashtags: opts && opts.hashtags,
      mentions: opts && opts.mentions,
    });
    return await postComment.save();
  };

  fetchPostComment = async (postCommentId: string) => {
    return await PostComment.findById(postCommentId);
  };

  fetchAll = async () => await PostComment.find();

  updatePostComment = async (postCommentId: string, data: any) => {
    return await PostComment.findById(postCommentId).then((postComment) => {
      if (postComment) {
        postComment.set(data);
        return postComment.save();
      } else {
        throw new Error("not found!");
      }
    });
  };

  deletePostComment = async (postCommentId: string) =>
    await PostComment.findByIdAndDelete(postCommentId);

  /*
   * Gets all comments for a specific user.
   */
  fetchByUser = async (userId: string) =>
    await PostComment.find({ user_id: userId });

  /*
   * Gets a ranked list of the top 10 hashtags and top 10 mentions, and how often they were used.
   */
  fetchTopHashtagsAndMentions = async (limit: number) => {
    let hashtagPipeline = PostComment.aggregate([
      { $unwind: "$hashtags" },
      {
        $group: {
          _id: { hashtags: "$hashtags" },
          hashtag: { $first: "$hashtags" },
          count: { $sum: 1 },
        },
      },
      { $project: { _id: 0, hashtag: 1, count: 1 } },
      { $sort: { count: -1 } },
      { $limit: limit },
    ]);

    let mentionPipeline = PostComment.aggregate([
      { $unwind: "$mentions" },
      {
        $group: {
          _id: { mentions: "$mentions" },
          mention: { $first: "$mentions" },
          count: { $sum: 1 },
        },
      },
      { $project: { _id: 0, mention: 1, count: 1 } },
      { $sort: { count: -1 } },
      { $limit: limit },
    ]);

    return await Promise.all([hashtagPipeline, mentionPipeline]);
  };
}
