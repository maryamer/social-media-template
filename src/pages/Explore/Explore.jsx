import { useEffect } from "react";
import { BsChatFill, BsHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { getAsyncExplorePosts } from "../../features/explore/exploreSlice";
import useFetch from "../../hooks/useFetch";

function Explore({ isLoading }) {
  const { posts, loading, error } = useSelector((state) => state.explorePosts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAsyncExplorePosts());
    console.log(posts);
  }, []);
  const { pathname } = useLocation();
  return (
    <div
      className={`${
        pathname.includes("explore")
          ? " md:w-5/6 overflow-y-scroll xl:scrollbar-none "
          : ""
      }w-full dark:bg-slate-800 overflow-y-scroll scrollbar-none  h-screen flex  gap-0 justify-center flex-wrap  `}
    >
      {loading ? (
        <Loader />
      ) : (
        posts &&
        posts.map((post) => (
          <SinglePost key={post.id} post={post} isLoading={isLoading} />
        ))
      )}
    </div>
  );
}

export default Explore;

export function SinglePost({ post, isLoading }) {
  return (
    <>
      {isLoading ? (
        <div className=" dark:bg-slate-700 bg-slate-200  animate-pulse post lg:max-w-[24%]  md:max-w-[33%] sm:min-w-[130px] w-1/2 aspect-square  xl:m-1 rounded-xl  ">
          {/* <div className="postCenter w-full loading-page"></div> */}
        </div>
      ) : (
        <div className="post lg:max-w-[24%] md:max-w-[33%] sm:min-w-[130px] w-1/2 aspect-square  dark:bg-slate-950 dark:text-white dark:border border-slate-800  xl:m-1 rounded-xl  ">
          <div className="postCenter w-full ">
            <div className="overflow-hidden  cursor-pointer lg:rounded-xl relative group w-full">
              <div className="lg:rounded-xl z-40  hidden lg opacity-100 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-b inset-x-0 -top-1 pt-30 text-white lg:flex items-start w-full">
                <div className=" p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-0 pb-10 transform transition duration-300 ease-in-out w-full">
                  <div className="opacity-0 group-hover:opacity-100  transition duration-200 ease-in-out  text-sm flex w-full justify-between  ">
                    <div className="postTopLeft flex items-center hover:opacity-60">
                      <img
                        className="postProfileImg w-8 h-8 rounded-full object-cover"
                        src={post.photo}
                      />
                      <span className="postUsername text-sm font-medium mx-2.5 "></span>
                      <span className="postDate text-xs">{post.date}</span>
                    </div>
                    <div className="flex ">
                      <BsHeartFill className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-5 h-5  mx-1 lg:ml-2 text-slate-300 opacity-90  " />
                      <span className="text-slate-300 opacity-90 font-bold ">
                        33
                      </span>
                      <BsChatFill className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-5 h-5  mx-1 lg:ml-2 text-slate-300 opacity-90" />
                      <span className="text-slate-300 opacity-90 font-bold">
                        4
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <img
                alt=""
                className="aspect-square rounded-lg object-cover opacity-100 group-hover:opacity-80  "
                src={post.photo}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
