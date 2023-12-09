import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAsyncUsers } from "../../features/users/usersSlice";
import Character from "./Character";
import SearchComponent from "./SearchComponent";
import InnerHeader from "./InnerHeader";
import { Users } from "../../data/Data";

export default function UsersList({ children, title, locationParameter }) {
  // const {
  //   users,
  //   loading: isLoading,
  //   error,
  // } = useSelector((state) => state.users);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAsyncUsers());
  // }, []);
  const navigate = useNavigate();
  const allUsers = Users();
  const [users, setUsers] = useState(allUsers);
  const searchHandler = (text) => {
    const selectedUsers = allUsers.filter((item) =>
      item.username.includes(text)
    );
    setUsers(selectedUsers);
  };
  return (
    <div className="UsersList absolute right-0 top-0  sm:static  w-full md:w-4/6 h-screen  dark:text-white  flex flex-col h-screen justify-center items-center min-w-fit">
      <InnerHeader direction title={title} />

      <SearchComponent title={title} searchHandler={searchHandler} />
      <div className="characters-list overflow-x-hidden flex flex-col justify-center items-center w-full h-screen   overflow-y-scroll scrollbar-none ">
        {/* {title && <HeaderTitle title={title} />} */}
        <div className="w-full h-full lg:h-[95%] ">
          {users ? (
            users.map((item) => (
              <Character
                key={item.id}
                item={item}
                locationParameter={locationParameter}
                title={title}
              >
                {children}
              </Character>
            ))
          ) : (
            <Character isLoading={false} />
          )}
        </div>
      </div>
    </div>
  );
}
