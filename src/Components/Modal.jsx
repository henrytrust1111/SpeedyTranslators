import React from "react";

function Modal(props) {
  const { children, toggle, show } = props;

  if (!show) return null;
  return (
    <div
      className="fixed top-0 left-0 z-50 bg-black/50 w-[100vw] h-[100vh] overflow-auto flex items-start py-[100px] justify-center"
      id="wrapper"
      onClick={toggle}
    >
      <div
        className="overflow-auto w-[500px] sm:w-[600px] md:w-[700px] bg-white  border rounded-[14px] border-[#E1DFDF] flex items-center justify-center flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
