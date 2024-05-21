import { useRef, useEffect } from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

const ShowOrderModal = (props) => {
  const { toggle, show } = props;

  const playerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      playerRef.current.pause();
    }, 1000);

    return () => clearTimeout(timer);
  }, [toggle]);

  return (
    <Modal toggle={toggle} show={show}>
      <div className="flex relative flex-col items-center justify-center py-16 px-20">
        <svg
          className="cursor-pointer w-5 h-5 absolute top-5 right-5"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 50 50"
          onClick={toggle}
        >
          <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
        </svg>
        <div className="h-[140px]">
          <Player
            src="https://lottie.host/930b358b-0b31-435f-aaa3-88ca57db05a4/sQ3L7s390v.json"
            className="w-[140px]"
            autoplay
            ref={playerRef}
          />
        </div>

        <div className=" flex flex-col text-center justify-center items-center gap-4">
          <h1 className="text-[32px] leading-10 text-black font-medium">
            The details of your order has been successfully added to the waiting cart!
          </h1>
          <p className="text-[15px] font-medium text-[#9CA3AF]">
            Please
            <Link
              to="/"
              className=" underline underline-offset-2 cursor-pointer px-1"
            >
              click here
            </Link>
            to return to the Home page.
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default ShowOrderModal;
