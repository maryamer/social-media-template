import { useRef } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Modal({
  title,
  children,
  onOpen,
  open,
  imageURL,
  message,
  toastSuccessMessage,
  cb,
}) {
  const modalRef = useRef();
  useOutsideClick(modalRef, "modal", () => onOpen(false));
  const navigate = useNavigate();
  return (
    <>
      {open ? (
        <>
          {/* <div
        className="backdrop bgg-[rgba(63, 69, 76, 0.8)] fixed h-screen w-screen"
        onClick={() => onOpen(false)}
      ></div> */}

          <div className="fixed top-0 right-0 bottom-0 left-0 z-50 flex items-center h-screen w-screen">
            <div
              id="modal"
              className=" m-auto p-4 w-full max-w-md "
              ref={modalRef}
            >
              <div className="relative p-4 text-center  rounded-lg shadow bg-white border border-slate-300 dark:bg-gray-800 sm:p-5">
                <button
                  onClick={() => onOpen(false)}
                  type="button"
                  className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <span className="sr-only">Close modal</span>
                </button>

                <p className="mb-4 text-gray-500 dark:text-gray-300">
                  Are you sure you want to {message}?
                </p>
                <div className="flex justify-center items-center space-x-4">
                  <button
                    onClick={() => onOpen(false)}
                    type="button"
                    className="py-2 px-3 text-sm font-medium text-gray-500 bg-slate-300 rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  >
                    No, cancel
                  </button>
                  <button
                    onClick={() => {
                      onOpen(false),
                        toastSuccessMessage &&
                          toast.success(toastSuccessMessage),
                        cb && cb();
                    }}
                    type="submit"
                    className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
                  >
                    Yes, I'm sure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Modal;
