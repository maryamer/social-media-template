import { useState } from "react";
import { useEffect } from "react";
import {
  BsBookmark,
  BsBookmarkFill,
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
import Modal from "./Modal/Modal";

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
  const [isOpen, setIsOpen] = useState(true);
  const [isLike, setIsLike] = useState(false);
  const [isBookmark, setIsBookmart] = useState(false);
  useEffect(() => {
    dispatch(getAsyncExploreSinglePost({ id: postId }));
    // }
  }, []);
  return (
    <div className="w-full lg:w-5/6 min-w-5/6 h-full flex items-center justify-center fixed right-0 bottom-0 sm:static ">
      <div className="flex flex-col lg:flex-row dark:bg-slate-950 bg-slate-200 h-5/6 md:h-11/12  w-11/12 md:w-5/6 xl:w-11/12 rounded-[30px] flex-col flex xl:flex-row border dark:border-slate-800 border-slate-500 xl:rounded-l-[24px] overflow-x-hidden">
        <img
          src={post.photo}
          className=" w-full h-[350px] lg:h-full  lg:w-1/2 rounded-t-[30px] xl:rounded-l-[24px] xl:rounded-tr-none object-cover p-5 bg-dark-1"
        />
        <div className="post_details-info dark:bg-slate-900 bg-slate-400 flex flex-col gap-5 lg:gap-7 flex-1 items-start p-5 rounded-b-[30px] lg:rounded-r-[30px] lg:rounded-l-none">
          <div className="flex-between w-full">
            <div className=" flex items-center gap-4">
              <img
                src={post.photo}
                alt="creator"
                className=" w-12 h-12 lg:w-14 lg:h-14 rounded-full self-ccenter"
              />
              <p className="self-center text-white md:text-xl font-medium">
                MaryamEbrahimi <br />
                <span className="text-sm dark:text-gray-400 text-gray-500 font-medium">
                  13 minutes ago
                </span>
              </p>
            </div>
          </div>
          <hr className="border w-full border-dark-4/80" />

          <div className="flex text-white flex-col font-medium flex-1 w-full small-medium lg:base-regular">
            <p className="text-gray-200">
              unlimited next.js course for begginers
            </p>
            <ul className="flex gap-1 mt-2">
              <li className="dark:text-gray-400 text-gray-500">#Next.js</li>
            </ul>
          </div>
          <div className="w-full flex justify-between items-center">
            {!isLike ? (
              <div className="relative">
                <BsHeart
                  onClick={() => setIsLike(true)}
                  className="text-red-500 w-6 h-6 lg:w-7 lg:h-7 cursor-pointer"
                />{" "}
                <span className="font-bold absolute text-white -right-5 -top-1 text-xl">
                  0
                </span>
              </div>
            ) : (
              <div className="relative">
                <BsHeartFill
                  onClick={() => setIsLike(false)}
                  className="text-red-500 w-6 h-6 lg:w-7 lg:h-7 cursor-pointer"
                />
                <span className="font-bold absolute text-white -right-5 -top-1 text-xl">
                  1
                </span>
              </div>
            )}
            {isBookmark ? (
              <BsBookmarkFill
                onClick={() => setIsBookmart(false)}
                className="text-blue-500 w-6 h-6 lg:w-7 lg:h-7 cursor-pointer "
              />
            ) : (
              <BsBookmark
                onClick={() => setIsBookmart(true)}
                className="text-blue-500 w-6 h-6 lg:w-7 lg:h-7 cursor-pointer "
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
