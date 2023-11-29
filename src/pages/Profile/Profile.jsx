import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import InnerHeader from "../../components/common/InnerHeader";
import Loader from "../../components/common/Loader/Loader";
import { BsBookmarkFill } from "react-icons/bs";
import { AccountUser, Users } from "../../data/Data";
import Modal from "../../components/common/Modal/Modal";

function Profile() {
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const { pathname } = useLocation();
  const { userId } = useParams();

  const accountUser = AccountUser();
  const users = Users();
  const [user, setUser] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    if (pathname.includes("user")) {
      const selectedUser = users.find((item) => item.id == userId);
      setUser(selectedUser);
    } else {
      setUser(accountUser);
    }
  }, [pathname]);
  useEffect(() => {
    navigate("posts", { replace: true });
  }, []);
  // const [item, setItem] = useState({});
  // const {
  //   user,
  //   loading: isLoading,
  //   error,
  // } = useSelector((state) => state.accountUser);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   navigate("posts");
  //   dispatch(getAsyncAccountUser());
  // }, []);

  return (
    <div className=" w-full md:w-5/6 lg:w-4/6 mx-auto bg-slate-300 dark:bg-slate-950 dark:text-white overflow-y-scroll scrollbar-none h-screen">
      {user ? (
        <>
          <div className=" ">
            <InnerHeader
              user={user}
              setIsSettingOpen={setIsSettingOpen}
              direction="/profile/settings"
              title={user.username}
            />
            <ProfileBody user={user} pathname={pathname} />
          </div>
          {/* <Explore isLoading={isLoading} /> */}
          <Outlet />
        </>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
}

export default Profile;

function ProfileBody({ user, isLoading, pathname }) {
  const navigate = useNavigate();
  const [isFollow, setIsFollow] = useState(false);
  const [followerNumber, setFollowerNumber] = useState(100);
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center text-center mt-4">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="flex flex-row w-11/12 md:items-center ">
              <Link className="flex justify-center w-2/6 md:w-[20%]  bg-center bg-no-repeat bg-cover   rounded-full">
                <img
                  src={`${user?.profilePicture}`}
                  alt=""
                  className="rounded-full object-cover w-20 h-20 md:h-32 md:w-32 "
                />
              </Link>
              <div className="flex flex-col md:items-start justify-center items-center w-4/6 md:w-[80%] items-start p-1">
                <h2 className="font-semibold text-lg hidden md:flex">
                  {user?.username}&nbsp;
                </h2>
                <span className="text-sm text-gray-600 hidden md:flex">
                  {user.name}&nbsp;{user.lastname}
                </span>
                <span className="text-sm text-gray-400 mt-2 hidden md:flex">
                  {user.bio}
                </span>

                <div className="flex md:justify-start justify-around w-full font-semibold text-sm gap-2 my-2 text-gray-700">
                  <div className="flex flex-col   md:flex-row  text-center md:mr-2">
                    <p className="dark:text-blue-400 md:mr-1  ">12</p>
                    <span className="text-gray-400">Posts</span>
                  </div>
                  <Link
                    to="/followers"
                    className="flex flex-col  md:flex-row  text-center md:mr-2 cursor-pointer"
                  >
                    <p className="dark:text-blue-400 md:mr-1  ">
                      {followerNumber}
                    </p>
                    <span className="text-gray-400">Followers</span>
                  </Link>
                  <Link
                    to="/following"
                    className="flex flex-col  md:flex-row text-center md:mr-2 cursor-pointer"
                  >
                    <p className="dark:text-blue-400 md:mr-1  ">102</p>
                    <span className="text-gray-400">Folowing</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex md:hidden flex-col items-start w-5/6  sm:px-10 ">
              <h2 className="md:font-semibold md:text-lg ">
                {user?.name}&nbsp;
                {user?.lastName}
              </h2>
              <span className="text-sm text-gray-400 mt-1">{user.bio}</span>
            </div>
            {pathname.includes("user") && (
              <div className="flex items-start  w-11/12 my-5 md:p-5 rounded">
                <button
                  onClick={() => {
                    isFollow
                      ? setIsOpenModal(true)
                      : (setFollowerNumber((prev) => prev + 1),
                        setIsFollow(true));
                  }}
                  className={[
                    "hover:opacity-80 w-1/3 py-2 rounded-l-lg text-white ",
                    isFollow
                      ? "dark:bg-slate-800 dark:bg-slate-500"
                      : "dark:bg-slate-500 bg-slate-400 ",
                  ].join(" ")}
                >
                  {isFollow ? "Unfollow" : "Follow"}
                </button>
                <button
                  onClick={() => navigate("/messages/1")}
                  className="dark:bg-slate-800 bg-slate-500 hover:opacity-80  rounded-r-lg w-1/3   py-2 text-white  "
                >
                  Message
                </button>
              </div>
            )}
            <div className="flex justify-between w-full text-slate-800 dark:text-slate-400 items-center">
              <NavLink
                to="posts"
                className="w-full opacity-80 hover:opacity-100 py-2 "
              >
                {({ isActive }) => (
                  <div
                    className={
                      isActive
                        ? "w-full py-2 border-b-2 border-blue-400 "
                        : "w-full py-2"
                    }
                  >
                    <AiOutlineAppstore className="m-auto font-bold w-5 h-auto py-2" />
                  </div>
                )}
              </NavLink>
              <NavLink
                to="bookmarks"
                className="w-full opacity-70 hover:opacity-100 py-2 "
              >
                {({ isActive }) => (
                  <div
                    className={
                      isActive
                        ? "w-full py-2 border-b-2 border-blue-400 "
                        : "w-full py-2"
                    }
                  >
                    <BsBookmarkFill className="m-auto w-5 h-auto py-2 " />
                  </div>
                )}
              </NavLink>
            </div>
          </>
        )}
      </div>
      <Modal
        onOpen={setIsOpenModal}
        open={isOpenModal}
        message={`unfollow ${user.name}`}
        toastSuccessMessage="Successfully unfolowed"
        cb={() => {
          setIsFollow((prev) => !prev), setFollowerNumber((prev) => prev - 1);
        }}
      />
    </>
  );
}
