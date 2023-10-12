export default function Share() {
  return (
    <div className=" m-2 flex items-center justify-around  bg-slate-950 lg:py-3 xl:max-w-[75%] w-full lg:w-4/5">
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
      <button className="bg-gray-800 hover:bg-gray-700 transition duration-150 ease-in-out dark:text-slate-300 text-sm lg:font-bold p-2 lg:py-2.5 lg:px-4 rounded-lg">
        Share
      </button>
    </div>
  );
}
function ShareNoteInput() {
  return (
    <input
      placeholder="What's in your mind maryam?"
      className="shareInput w-9/12 sm:w-[90%] text-xs h-8 md:text-base  mr-3 md:w-11/12 focus:outline-none rounded-md lg:rounded-lg lg:p-2 p-1 cursor-pointer dark:bg-gray-700 dark:text-white "
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
