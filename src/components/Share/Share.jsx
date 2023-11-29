export default function Share() {
  return (
    <div className=" p-2 border dark:border-slate-800 border-slate-400 border-px rounded-3xl  z-10 fixed top-0 flex items-center justify-around bg-slate-300  dark:bg-slate-950 lg:py-3 max-w-xl w-screen lg:w-4/5">
      <ShareNoteImg />
      &nbsp;
      <ShareNoteInput />
      <ShareNoteBtn />
    </div>
  );
}

function ShareNoteBtn() {
  return (
    <div className="shareBottom dark:text-white flex items-center justify-between ">
      <button className="dark:bg-gray-800 bg-slate-500 text-gray-200 hover:bg-slate-500 hover:text-slate-200 transition duration-150 ease-in-out dark:text-slate-300 text-sm lg:font-bold p-2 lg:py-2.5 lg:px-4 rounded-lg">
        Share
      </button>
    </div>
  );
}
function ShareNoteInput() {
  return (
    <input
      placeholder="What's in your mind maryam?"
      className="shareInput border border-slate-200 dark:border-slate-800 w-9/12 sm:w-[90%] text-xs h-8 md:text-base  mr-3 md:w-[80%] focus:outline-none rounded-md lg:rounded-lg lg:p-2 p-1 cursor-pointer bg-slate-300 dark:bg-gray-900 dark:text-white text-slate-500"
    />
  );
}
function ShareNoteImg() {
  return (
    <img
      className="shareProfileImg  object-cover lg:w-12 lg:h-12 h-9 w-9 rounded-full lg:mr-2"
      src="/assets/person/1.jpeg"
      alt=""
    />
  );
}
