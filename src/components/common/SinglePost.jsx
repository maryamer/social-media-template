import { useState, useEffect } from "react";

import {
  BsBookmark,
  BsBookmarkFill,
  BsFillTrashFill,
  BsHeart,
  BsHeartFill,
  BsTrash3,
} from "react-icons/bs";
import { Link, useLocation, useParams } from "react-router-dom";
import Loader from "./Loader/Loader";
import { AccountUser, Posts, Users } from "../../data/Data";
import Modal from "./Modal/Modal";
import InnerHeader from "./InnerHeader";

export default function SinglePost() {
  // const {
  //   posts,
  //   loading: isLoading,
  //   error,
  //   post,
  // } = useSelector((state) => state.explorePosts);
  // const { data: users } = useFetch("http://localhost:5000/users");
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAsyncExploreSinglePost({ id: postId }));
  //   // }
  // }, []);
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [likeNumber, setLikeNumber] = useState(0);
  const { postId, userId } = useParams();
  const params = useParams();
  const { pathname } = useLocation();
  useEffect(() => {
    const posts = Posts();
    const users = Users();
    const selectedPost = posts.find((item) => item.id == postId);
    setLikeNumber(selectedPost.like);
    if (userId) {
      const selectedUser = users.find((item) => item.id == userId);
      setUser(selectedUser);
    } else {
      const accountUser = AccountUser();
      setUser(accountUser);
    }
    setPost(selectedPost);
    return () => setPost(null);
  }, [userId, postId]);
  const [isLike, setIsLike] = useState(false);
  const [isBookmark, setIsBookmart] = useState(false);
  return (
    <>
      {!post || !user ? (
        <Loader />
      ) : (
        <div className="h-screen w-full ">
          <InnerHeader />
          <div
            className="w-full self-center min-w-5/6 h-full md:h-5/6
           flex flex-col items-center justify-start pt-10  right-0 bottom-0 sm:static "
          >
            <div className="flex flex-col lg:flex-row dark:bg-slate-950 bg-slate-400  h-11/12 md:h-full  w-11/12  rounded-[30px] flex-col flex xl:flex-row border dark:border-slate-800 border-slate-500 xl:rounded-l-[24px] ">
              <img
                src={post && post?.photo}
                className=" w-full h-[350px] lg:h-full  lg:w-1/2 rounded-t-[30px] xl:rounded-l-[24px] xl:rounded-tr-none object-cover p-5 bg-dark-1"
              />
              <div className="post_details-info dark:bg-slate-900 bg-slate-400 flex flex-col gap-5 lg:gap-7 flex-1 items-start p-5 rounded-b-[30px] lg:rounded-r-[30px] lg:rounded-l-none">
                <div className="flex justify-between w-full items-center">
                  <Link
                    to={user.id ? `/user/${user.id}` : `/profile/posts`}
                    className="flex-between w-full"
                  >
                    <div className=" flex items-center gap-4">
                      <img
                        src={user && user?.profilePicture}
                        alt="creator"
                        className=" w-12 h-12 object-cover lg:w-14 lg:h-14 rounded-full self-ccenter"
                      />
                      <p className="self-center text-white md:text-xl font-medium">
                        {user?.username} <br />
                        <span className="text-sm dark:text-gray-400 text-gray-500 font-medium">
                          13 minutes ago
                        </span>
                      </p>
                    </div>
                  </Link>
                  {pathname.includes("profile") && (
                    <BsTrash3
                      onClick={() => setIsOpenModal(true)}
                      className="text-red-500 w-6 h-auto cursor-pointer"
                    />
                  )}
                </div>
                <hr className="border w-full border-dark-4/80" />

                <div className="flex text-white flex-col font-medium flex-1 w-full small-medium lg:base-regular">
                  {post.desc && <p className="text-gray-200">{post?.desc}</p>}
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
                <div className="w-full flex justify-between items-center">
                  {!isLike ? (
                    <div className="relative">
                      <BsHeart
                        onClick={() => {
                          setIsLike(true), setLikeNumber((prev) => prev + 1);
                        }}
                        className="text-red-500 w-6 h-6 lg:w-7 lg:h-7 cursor-pointer mr-2"
                      />{" "}
                      <span className="font-bold absolute text-white -right-5 -top-1 text-xl ">
                        {likeNumber}
                      </span>
                    </div>
                  ) : (
                    <div className="relative">
                      <BsHeartFill
                        onClick={() => {
                          setIsLike(false), setLikeNumber((prev) => prev - 1);
                        }}
                        className="text-red-500 w-6 h-6 lg:w-7 lg:h-7 cursor-pointer mr-2"
                      />

                      <span className="font-bold absolute text-white -right-5 -top-1 text-xl ">
                        {likeNumber}
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
        </div>
      )}
      <Modal
        onOpen={setIsOpenModal}
        open={isOpenModal}
        message={"delete this item"}
        toastSuccessMessage="The post successfully deleted"
        cb={() => navigate(-1)}
      />
    </>
  );
}
