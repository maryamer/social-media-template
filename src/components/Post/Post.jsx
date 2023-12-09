import { useEffect, useState } from "react";
import {
  BsBookmark,
  BsBookmarkFill,
  BsHeart,
  BsHeartFill,
} from "react-icons/bs";
import { Users } from "../../data/Data";
import Loader from "../common/Loader/Loader";
import { useNavigate } from "react-router-dom";

export default function Post({ post }) {
  // const { isLoading, data: users } = useFetch("http://localhost:5000/users");
  const users = Users();
  const [user, setUser] = useState();
  useEffect(() => {
    const selectedUser = users.find((item) => item.id == post.userId);
    setUser(selectedUser);
  }, []);
  const navigate = useNavigate();

  const [like, setLike] = useState(post.like);
  const [isLike, setIsLike] = useState(false);
  const [isBookmark, setIsBookmart] = useState(false);

  const likeHandler = () => {
    setIsLike(!isLike);
    setLike(isLike ? like - 1 : like + 1);
  };
  return (
    <>
      {user ? (
        <div className="flex flex-col mb-2 md:mb-5 dark:bg-slate-950 bg-slate-300 bg-slate-200 h-fit w-11/12 rounded-[30px] border dark:border-slate-800 border-slate-400 xl:rounded-l-[24px] ">
          <div className="px-5 pt-5">
            <div className="flex-between w-full">
              <div className=" flex items-center gap-4">
                <img
                  onClick={() => navigate(`user/${user.id}/posts`)}
                  src={user?.profilePicture}
                  alt="creator"
                  className=" w-12 h-12 cursor-pointer object-cover  rounded-full self-ccenter"
                />
                <p className="self-center dark:text-white text-slate-600  font-medium">
                  {user?.username}
                  <br />
                  <span className="text-sm dark:text-gray-400 text-gray-500 font-medium">
                    13 minutes ago
                  </span>
                </p>
              </div>
            </div>

            <div className="flex text-white flex-col  flex-1 w-full small-medium ">
              <p className=" text-slate-600 dark:text-gray-200 mt-4 ">
                unlimited next.js course for begginers
              </p>
              <ul className="flex gap-1 mt-2">
                {post?.tags.map((item) => (
                  <li
                    key={item.id}
                    className="dark:text-gray-400 text-gray-500"
                  >
                    #{item.tagname}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <img
            src={post.photo}
            className=" w-full h-[350px] lg:h-[400px]  rounded-[30px]  object-cover p-5 bg-dark-1"
          />
          <div className="post_details-info  flex flex-col gap-5 flex-1 items-start p-5 rounded-b-[30px] ">
            <div className="w-full flex justify-between items-center">
              {!isLike ? (
                <div className="relative flex justify-between w-10">
                  <span>
                    <BsHeart
                      onClick={() => {
                        setIsLike(true), setLike((prev) => prev + 1);
                      }}
                      className="text-red-500 w-6 h-6  cursor-pointer "
                    />
                  </span>
                  &nbsp;&nbsp;
                  <span className="font-bold flex items-start dark:text-white text-slate-500 -right-5 -top-1 text-xl ">
                    {like}
                  </span>
                </div>
              ) : (
                <div className="relative flex justify-between w-10">
                  <span>
                    <BsHeartFill
                      onClick={() => {
                        setIsLike(false), setLike((prev) => prev - 1);
                      }}
                      className="text-red-500 w-6 h-6 cursor-pointer  "
                    />
                  </span>
                  &nbsp;&nbsp;
                  <span className="font-bold flex items-start  dark:text-white text-slate-500  text-xl ">
                    {like}
                  </span>
                </div>
              )}
              {isBookmark ? (
                <BsBookmarkFill
                  onClick={() => setIsBookmart(false)}
                  className="text-blue-500 w-6 h-6  cursor-pointer "
                />
              ) : (
                <BsBookmark
                  onClick={() => setIsBookmart(true)}
                  className="text-blue-500 w-6 h-6  cursor-pointer "
                />
              )}
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
