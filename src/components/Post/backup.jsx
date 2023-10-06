import "./post.css";
// import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [islLike, setIsLike] = useState(false);

  const likeHandler = () => {
    setIsLike(!islLike);
    setLike(islLike ? like - 1 : like + 1);
  };
  return (
    <div className="post  dark:bg-slate-950 dark:text-white w-full md:w-4/5  ">
      <div className="postWrapper py-5">
        <div className="postTop flex items-center justify-between px-5">
          <div className="postTopLeft flex items-center">
            <img
              className="postProfileImg w-8 h-8 rounded-full object-cover"
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
            />
            <span className="postUsername text-sm font-medium mx-2.5">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate text-xs">{post.date}</span>
          </div>
          <div className="postTopRight">{/* <MoreVert/> */}</div>
        </div>
        <div className="postCenter py-5">
          <span className="postText pl-5">{post?.desc}</span>
          <img
            className="postImg mt-5 w-full object-contain"
            src={post.photo}
            alt=""
          />
        </div>
        <div className="postBottom px-5 flex items-center justify-between">
          <div className="postBottomLeft flex items-center">
            {/* <img
              className="likeIcon "
              src="/assets/like.png"
              onClick={likeHandler}
              alt=""
            /> */}
            <img
              className="likeIcon mr-1 w-6 h-6 cursor-pointer"
              src="/assets/heart.png"
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter text-sm ">
              {like} people like it
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText cursor-pointer text-sm">
              {post.comment} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
