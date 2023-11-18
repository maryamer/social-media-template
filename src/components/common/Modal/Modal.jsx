import { BsXCircle } from "react-icons/bs";

function Modal({ title, children, onOpen, open, imageURL }) {
  if (!open) return null;
  return (
    <div className="">
      <div
        className="backdrop bgg-[rgba(63, 69, 76, 0.8)] fixed h-screen w-screen"
        onClick={() => onOpen(false)}
      ></div>

      <div className="modal w-full xl:min-w-[900px] flex items-center justify-center md:w-4/6 max-h-fit absolute top-0 md:top-[10%] md:left-1/4  rounded-lg bg-slate-800  text-white ">
        {/* <div className="modal__header flex items-center justify-between">
          <h2 className="title">{title}</h2>
          <button onClick={() => onOpen(false)}>
            <BsXCircle className="icon close" />
          </button>
        </div> */}
        {children}
      </div>
    </div>
  );
}

export default Modal;
