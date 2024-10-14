import React from "react";

function Modal({ onClose, children }) {
  return (
    <div className="fixed inset-0 bg-blue-400 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-slate-100 p-5 rounded-2xl shadow-lg text-center">
        <div className="text-2xl mb-4">{children}</div>
        <button
          onClick={onClose}
          className="text-center w-1/2 mx-auto bg-red-100 text-blue-400 text-2xl cursor-pointer mt-5 p-2 rounded hover:bg-blue-200"
        >
          Play Again
        </button>
      </div>
    </div>
  );
}

export default Modal;
