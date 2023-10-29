import { useState } from "react";
import { useEffect } from "react";
import {
  BsChat,
  BsChatFill,
  BsHeart,
  BsHeartFill,
  BsSend,
} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAsyncExploreSinglePost } from "../../features/explore/exploreSlice";
import useFetch from "../../hooks/useFetch";

export default function SinglePost() {
  const {
    posts,
    loading: isLoading,
    error,
    post,
  } = useSelector((state) => state.explorePosts);
  const { data: users } = useFetch("http://localhost:5000/users");

  const dispatch = useDispatch();
  const { id: postId } = useParams();

  useEffect(() => {
    dispatch(getAsyncExploreSinglePost({ id: postId }));
    // }
  }, []);
  return (
    <>
      {post && (
        <div className="w-full lg:w-5/6 h-screen flex items-center justify-center">
          <div className="aspect-square w-5/6 h-5/6 flex items-center justify-center  cursor-pointer lg:rounded-xl relative group w-fit">
            <div className="lg:rounded-xl  z-40  cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-b inset-x-0 top-0 pt-30 text-white flex items-start">
              <div className="  p-4 space-y-3 text-xl group-hover:translate-y-0 translate-y-0 pb-10 transform transition duration-300 ease-in-out">
                <div className=" text-sm  ">
                  <Link
                    to="/profile"
                    className="postTopLeft flex items-center hover:opacity-60"
                  >
                    <img
                      className="postProfileImg w-8 h-8 rounded-full h-full object-cover"
                      src={
                        users &&
                        users.filter((u) => u.id == post.userId)[0]
                          ?.profilePicture
                      }
                    />
                    <span className="postUsername text-sm font-medium mx-2.5 ">
                      {users &&
                        users.filter((u) => u.id === post.userId)[0]?.username}
                    </span>
                    <span className="postDate text-xs">{post.date}</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:rounded-xl z-40 w-full transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 bottom-0 pt-30 text-white flex items-start">
              <div>
                <div className="w-full  lg:p-4 lg:pb-10 space-y-3 text-xl  group-hover:translate-y-0 translate-y-0  transform transition duration-300 ease-in-out">
                  <div className="flex items-center p-5 justify-between w-[900px] w-full ">
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
              className="object-contain w-full h-full
                  transition duration-300 ease-in-out"
              src={post.photo}
            />
          </div>
        </div>
      )}
    </>
  );
}
