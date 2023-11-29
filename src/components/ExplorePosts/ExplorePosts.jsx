import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  BsBookmark,
  BsBookmarkFill,
  BsHeart,
  BsHeartFill,
} from "react-icons/bs";
import { getAsyncExplorePosts } from "../../features/explore/exploreSlice";
import { Posts, Users } from "../../data/Data";
import Loader from "../common/Loader/Loader";

export default function ExplorePosts() {
  // const { posts, loading, error } = useSelector((state) => state.explorePosts);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAsyncExplorePosts());
  // }, []);
  const posts = Posts();
  const { pathname } = useLocation();
  const { userId } = useParams();
  console.log(userId);
  return (
    <ul className=" grid grid-cols-2 xl:grid-cols-3 gap-6 p-4">
      {posts.map((post) => (
        <React.Fragment key={post.id}>
          <ExploreImage post={post} pathname={pathname} userId={userId} />
        </React.Fragment>
      ))}
    </ul>
  );
}

export function ExploreImage({ post, pathname, userId }) {
  const users = Users();
  const [user, setUser] = useState(null);
  const [isLike, setIsLike] = useState();
  const [isBookmark, setIsBookmark] = useState();

  useEffect(() => {
    const selectedUser = users.find((item) => item.id == post.userId);
    setUser(selectedUser);
  }, []);
  return (
    <>
      {user ? (
        <li className="relative aspect-square">
          <Link
            to={
              pathname.includes("explore")
                ? `/explore/${user?.id}/posts/${post?.id}`
                : userId
                ? `/user/${userId}/posts/${post?.id}`
                : `/profile/posts/${post?.id}`
            }
            className="grid-post_link flex rounded-[24px]  overflow-hidden cursor-pointer w-full h-full"
          >
            <img src={post?.photo} alt="post" className=" object-cover" />
          </Link>
          {pathname.includes("explore") && (
            <div className="grid-post_user absolute bottom-0 p-2 md:p-5 flex-between from-black/80 to-transparent bg-gradient-to-t w-full bg-gradient-to-t from-dark-3 to-transparent rounded-b-[24px] gap-2">
              <div className="flex items-center justify-between gap-2 flex-1">
                <div className="postTopLeft flex items-center hover:opacity-60 ">
                  <img
                    className="postProfileImg w-5 h-5 md:w-7 md:h-7 rounded-full object-cover"
                    src={user?.profilePicture}
                  />
                  &nbsp;
                  <span className="postUsername text-xs text-gray-200 md:text-sm  font-semibold">
                    {user?.name}
                  </span>
                </div>

                <div className="flex items-center justify-between ">
                  {isLike ? (
                    <BsHeartFill
                      onClick={() => setIsLike(false)}
                      className="text-red-700 hover:text-red-500 w-4 h-4 lg:w-5 lg:h-5 cursor-pointer md:mr-5 mr-2"
                    />
                  ) : (
                    <BsHeart
                      onClick={() => setIsLike(true)}
                      className="text-red-700 hover:text-red-500 w-4 h-4 lg:w-5 lg:h-5 cursor-pointer md:mr-5 mr-2"
                    />
                  )}
                  {isBookmark ? (
                    <BsBookmarkFill
                      onClick={() => setIsBookmark(false)}
                      className="text-blue-700 hover:text-blue-500 w-4 h-4 lg:w-5 lg:h-5 cursor-pointer "
                    />
                  ) : (
                    <BsBookmark
                      onClick={() => setIsBookmark(true)}
                      className="text-blue-700 hover:text-blue-500 w-4 h-4 lg:w-5 lg:h-5 cursor-pointer "
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </li>
      ) : (
        <Loader />
      )}
    </>
  );
}
