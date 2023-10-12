import { Users } from "../../dummyData";
import { useState } from "react";
import { BsHeart, BsSend } from "react-icons/bs";
import { BsChat } from "react-icons/bs";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [islLike, setIsLike] = useState(false);

  const likeHandler = () => {
    setIsLike(!islLike);
    setLike(islLike ? like - 1 : like + 1);
  };
  return (
    <div className="post xl:max-w-[75%]  dark:bg-slate-950 dark:text-white w-full lg:w-4/5 xl:m-1  ">
      <div className="postCenter py-1 ">
        <div className="overflow-hidden  cursor-pointer lg:rounded-xl relative group w-full">
          <div className="lg:rounded-xl z-40   opacity-100 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-b inset-x-0 -top-1 pt-30 text-white flex items-start">
            <div className="  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-0 pb-10 transform transition duration-300 ease-in-out">
              <div className="opacity-100 text-sm  ">
                <div className="postTopLeft flex items-center hover:opacity-60">
                  <img
                    className="postProfileImg w-8 h-8 rounded-full object-cover"
                    src={
                      Users.filter((u) => u.id === post.userId)[0]
                        .profilePicture
                    }
                  />
                  <span className="postUsername text-sm font-medium mx-2.5 ">
                    {Users.filter((u) => u.id === post.userId)[0].username}
                  </span>
                  <span className="postDate text-xs">{post.date}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:rounded-xl z-40 w-full opacity-100 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-6 pt-30 text-white flex items-start">
            <div>
              <div className="w-full  lg:p-4 lg:pb-10 space-y-3 text-xl lg:opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-0 pb-10 transform transition duration-300 ease-in-out">
                <div className="flex items-center justify-between w-[900px] ">
                  <div className="flex w-full">
                    <BsHeart className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-5 h-5  mx-1.5 lg:mx-2.5 hover:text-red-500 " />
                    <BsChat className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-5 h-5  mx-1.5 lg:mx-2.5 hover:text-gray-500" />
                    <BsSend className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-5 h-5  mx-1.5 lg:mx-2.5  hover:text-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            alt=""
            className="object-contain w-full group-hover:scale-100 transition duration-300 ease-in-out"
            src={post.photo}
          />
        </div>
      </div>
    </div>
  );
}
