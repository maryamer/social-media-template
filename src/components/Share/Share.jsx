// import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
import { HiHashtag } from "react-icons/hi";
import "./share.css";
export default function Share() {
  return (
    <div className="share bg-slate-950 p-3 rounded-lg m-2 w-full md:w-4/5">
      <div className="shareWrapper m-2 ">
        <div className="flex items-center justify-around">
          <img
            className="shareProfileImg cursor-pointer object-cover w-12 h-12 rounded-full "
            src="/assets/person/1.jpeg"
            alt=""
          />
          &nbsp;
          <input
            placeholder="What's in your mind maryam?"
            className="shareInput w-11/12 focus:outline-none rounded-lg p-2 cursor-pointer dark:bg-gray-700 dark:text-white "
          />
        </div>

        <div className="shareBottom dark:text-white mt-2 flex items-center justify-between ">
          <div className="shareOptions">
            <div className="shareOption md:hover:text-gray-300 transition duration-150 ease-in-out  font-bold pt-3 px-2 rounded-lg">
              {/* <PermMedia htmlColor="tomato" className="shareIcon" /> */}
              {/* <span className="shareOptionText">
                <HiHashtag className="bg-gray-500 rounded-full  text-black" />{" "}
              </span> */}
            </div>
          </div>
          {/* <button className="btn bg-gray-950">Share</button> */}
          <button class="bg-gray-800 hover:bg-gray-700 transition duration-150 ease-in-out dark:text-white font-bold py-2 px-4 rounded-lg">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
