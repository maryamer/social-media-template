import { BsChat, BsHeart, BsSend } from "react-icons/bs";
import { Posts } from "../../dummyData";

function ExplorePosts() {
  return (
    <div className="nearbyLocation dark:bg-slate-800 h-screen  overflow-y-scroll scrollbar ">
      <div className="locationList flex gap-0 justify-center flex-wrap   ">
        {Posts && Posts.map((post) => <SinglePost key={post.id} post={post} />)}
        {Posts && Posts.map((post) => <SinglePost key={post.id} post={post} />)}
      </div>
    </div>
  );
}

export default ExplorePosts;

export function SinglePost({ post }) {
  return (
    <div className="post xl:w-96 aspect-square  dark:bg-slate-950 dark:text-white w-96 lg:w-4/5 xl:m-1 rounded-xl  ">
      <div className="postCenter ">
        <div className="overflow-hidden  cursor-pointer lg:rounded-xl relative group w-full">
          <div className="lg:rounded-xl z-40   opacity-100 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-b inset-x-0 -top-1 pt-30 text-white flex items-start">
            <div>
              <div className=" p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-0 pb-10 transform transition duration-300 ease-in-out">
                {/* <div className="font-bold">Jessie Watsica</div> */}

                <div className="opacity-0 group-hover:opacity-100  transition duration-200 ease-in-out  text-sm  ">
                  <div className="postTopLeft flex items-center hover:opacity-60">
                    <img
                      className="postProfileImg w-8 h-8 rounded-full object-cover"
                      src={post.photo}
                    />
                    <span className="postUsername text-sm font-medium mx-2.5 "></span>
                    <span className="postDate text-xs">{post.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="lg:rounded-xl z-40 w-full opacity-100 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-6 pt-30 text-white flex items-start">
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
          </div> */}
          <img
            alt=""
            className="aspect-square object-cover opacity-100 group-hover:opacity-80  "
            src={post.photo}
          />
        </div>
      </div>
    </div>
  );
}
