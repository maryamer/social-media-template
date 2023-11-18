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
  useEffect(() => {
    dispatch(getAsyncExploreSinglePost({ id: postId }));
    // }
  }, []);
  return (
    <>
      {" "}
      <Modal
        onOpen={setIsOpen}
        imageURL={post.photo}
        open={isOpen}
        title="hello world"
      >
        {post && (
          <div className="w-full h-screen md:h-full  flex items-center ">
            <div className="w-full h-full flex flex-col md:flex-row max-h-screen overflow-y-auto  ">
              {/* <div className=" "> */}
              {/* <div className="  z-40  cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-b inset-x-0 top-0 pt-30 text-white flex items-start">
                    <div className=" p-4 space-y-3 text-xl group-hover:translate-y-0 translate-y-0 pb-10 transform transition duration-300 ease-in-out">
                      <div className=" text-sm  ">
                        <Link
                          to="/profile"
                          className="postTopLeft flex items-center hover:opacity-60 "
                        >
                          <img
                            className="postProfileImg w-8 h-8 rounded-full max-h-full object-cover"
                            src={
                              users &&
                              users.filter((u) => u.id == post.userId)[0]
                                ?.profilePicture
                            }
                          />
                          <span className="postUsername text-sm font-medium mx-2.5 ">
                            {users &&
                              users.filter((u) => u.id === post.userId)[0]
                                ?.username}
                          </span>
                          <span className="postDate text-xs">{post.date}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className=" z-40 w-full transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 bottom-0 pt-30 text-white flex items-start">
                    <div>
                      <div className="w-full  space-y-3 text-xl  group-hover:translate-y-0 translate-y-0  transform transition duration-300 ease-in-out">
                        <div className="flex items-center p-5 justify-between w-[900px] w-full ">
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
                className="object-contain md:rounded-l-lg w-full md:w-1/2
                 "
                src={post.photo}
              />
              {/* </div> */}
              <div>
                <div className=" comments md:absolute w-full md:w-1/2 md:right-0 md:top-0  max-h-full overflow-y-auto scrollbar-none text-white p-2  ">
                  <div className="comment border-b border-slate-600 p-2">
                    <span className="font-bold ">username :</span>
                    <br />
                    <p className="text-sm py-1">Lorem ipsum dolor sit amet/</p>
                    <span className="text-blue-500 "> reply</span>
                  </div>
                  <div className="comment border-b border-slate-600 p-2">
                    <span className="font-bold ">username :</span>
                    <br />
                    <p className="text-sm py-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Earum aperiam maiores
                    </p>
                    <span className="text-blue-500 "> reply</span>
                  </div>
                  <div className="comment border-b border-slate-600 p-2">
                    <span className="font-bold ">username :</span>
                    <br />
                    <p className="text-sm py-1">
                      , optio odit sapiente vel unde eveniet veritatis facilis
                      enim rerum rem!
                    </p>
                    <span className="text-blue-500 "> reply</span>
                  </div>
                  <div className="comment border-b border-slate-600 p-2">
                    <span className="font-bold ">username :</span>
                    <br />
                    <p className="text-sm py-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Earum aperiam maiores vitae sequi et aliquid obcaecati
                      dolorem, placeat quia, optio odit sapiente vel unde
                      eveniet veritatis facilis enim rerum rem!
                    </p>
                    <span className="text-blue-500 "> reply</span>
                  </div>
                  <div className="comment border-b border-slate-600 p-2">
                    <span className="font-bold ">username :</span>
                    <br />
                    <p className="text-sm py-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Earum aperiam maiores vitae sequi et aliquid obcaecati
                      dolorem, placeat quia,
                    </p>
                    <span className="text-blue-500 "> reply</span>
                  </div>
                  <div className="comment border-b border-slate-600 p-2">
                    <span className="font-bold ">username :</span>
                    <br />
                    <p className="text-sm py-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. E
                    </p>
                    <span className="text-blue-500 "> reply</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}

// backup

// import { useState } from "react";
// import { useEffect } from "react";
// import {
//   BsChat,
//   BsChatFill,
//   BsHeart,
//   BsHeartFill,
//   BsSend,
// } from "react-icons/bs";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useParams } from "react-router-dom";
// import { getAsyncExploreSinglePost } from "../../features/explore/exploreSlice";
// import useFetch from "../../hooks/useFetch";

// export default function SinglePost() {
//   const {
//     posts,
//     loading: isLoading,
//     error,
//     post,
//   } = useSelector((state) => state.explorePosts);
//   const { data: users } = useFetch("http://localhost:5000/users");

//   const dispatch = useDispatch();
//   const { id: postId } = useParams();

//   useEffect(() => {
//     dispatch(getAsyncExploreSinglePost({ id: postId }));
//     // }
//   }, []);
//   return (
//     <>
//       {post && (
//         <div className="w-full lg:w-5/6 h-screen flex items-center ">
//           <div className="aspect-square w-5/6 h-5/6 flex items-center justify-center  cursor-pointer lg:rounded-xl relative group w-fit">
//             <div className="lg:rounded-xl  z-40  cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-b inset-x-0 top-0 pt-30 text-white flex items-start">
//               <div className=" p-4 space-y-3 text-xl group-hover:translate-y-0 translate-y-0 pb-10 transform transition duration-300 ease-in-out">
//                 <div className=" text-sm  ">
//                   <Link
//                     to="/profile"
//                     className="postTopLeft flex items-center hover:opacity-60 "
//                   >
//                     <img
//                       className="postProfileImg w-8 h-8 rounded-full h-full object-cover"
//                       src={
//                         users &&
//                         users.filter((u) => u.id == post.userId)[0]
//                           ?.profilePicture
//                       }
//                     />
//                     <span className="postUsername text-sm font-medium mx-2.5 ">
//                       {users &&
//                         users.filter((u) => u.id === post.userId)[0]?.username}
//                     </span>
//                     <span className="postDate text-xs">{post.date}</span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <div className="lg:rounded-xl z-40 w-full transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 bottom-0 pt-30 text-white flex items-start">
//               <div>
//                 <div className="w-full  space-y-3 text-xl  group-hover:translate-y-0 translate-y-0  transform transition duration-300 ease-in-out">
//                   <div className="flex items-center p-5 justify-between w-[900px] w-full ">
//                     <div className="flex w-full">
//                       <BsHeart className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-5 h-5  mx-1.5 lg:mx-2.5 hover:text-red-500 " />
//                       <BsChat className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-5 h-5  mx-1.5 lg:mx-2.5 hover:text-gray-500" />
//                       <BsSend className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-5 h-5  mx-1.5 lg:mx-2.5  hover:text-blue-500" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <img
//               alt=""
//               className="object-contain w-full h-full
//                   transition duration-300 ease-in-out rounded-xl"
//               src={post.photo}
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
