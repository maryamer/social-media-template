import { BsBookmark, BsHeart } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import Loader from "../../components/common/Loader/Loader";
import InnerHeader from "../../components/common/InnerHeader";
import ExplorePosts from "../../components/ExplorePosts/ExplorePosts";

function Explore({ isLoading }) {
  // const { posts, loading, error } = useSelector((state) => state.explorePosts);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAsyncExplorePosts());
  // }, []);
  const { pathname } = useLocation();
  return (
    <div
      className={[
        "grid-container place-items-center w-full  h-screen  ",
        pathname.includes("explore") ? "overflow-auto scrollbar-none" : "",
      ].join(" ")}
    >
      <InnerHeader title="Explore" />
      <ExplorePosts />
    </div>
  );
}

export default Explore;

export function SingleItem({ post, isLoading }) {
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="postCenter p-2 ">
          <div className="overflow-hidden  cursor-pointer lg:rounded-xl relative group w-full">
            <div className="lg:rounded-xl z-40  transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 bottom-0  text-white lg:flex items-start w-full">
              <div className="p-1 md:p-4 space-y-3 text-xl   translate-y-0 translate-y-0  transform transition duration-300 ease-in-out w-full">
                <div className=" group-hover: opacity-100  transition duration-200 ease-in-out  text-sm flex w-full justify-between  ">
                  <div className="postTopLeft flex items-center hover:opacity-60">
                    <img
                      className="postProfileImg w-5 h-5 md:w-7 md:h-7 rounded-full object-cover"
                      src={post.photo}
                    />
                    &nbsp;
                    <span className="postUsername text-xs md:text-sm  font-base">
                      Maryam
                    </span>
                    {/* <span className="postDate text-xs">{post.date}</span> */}
                  </div>
                  <div className="flex items-center justify-between ">
                    <BsHeart
                      onClick={() => setIsLike(true)}
                      className="text-red-700 hover:text-red-500 w-4 h-4 lg:w-5 lg:h-5 cursor-pointer md:mr-5 mr-2"
                    />
                    {/* <span className="text-blue-300 opacity-90 font-bold ">
                      33
                    </span> */}
                    <BsBookmark
                      onClick={() => setIsBookmart(true)}
                      className="text-blue-700 hover:text-blue-500 w-4 h-4 lg:w-5 lg:h-5 cursor-pointer "
                    />
                    {/* <span className="text-slate-300 opacity-90 font-bold">
                      4
                    </span> */}
                  </div>
                </div>
              </div>
            </div>

            <img
              alt=""
              className="aspect-square rounded-lg object-cover opacity-100 group-hover: opacity-80  "
              src={post.photo}
            />
          </div>
        </div>
      )}
    </>
  );
}
