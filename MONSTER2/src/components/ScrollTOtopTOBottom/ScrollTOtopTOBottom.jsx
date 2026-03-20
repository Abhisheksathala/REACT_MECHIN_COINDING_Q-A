import React, { useRef } from "react";

const ScrollTOtopTOBottom = () => {
  const bottomRef = useRef(null);

  const handscrollB = () => {
    console.log("object");
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handscrollU = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <p>ScrollTOtopTOBottom</p>
      <div className="h-[200vh] bg-red-500 flex items-center flex-col justify-between">
        <p onClick={handscrollB}>botttom</p>
        <p ref={bottomRef} onClick={handscrollU}>
          Up
        </p>
      </div>
    </>
  );
};

export default ScrollTOtopTOBottom;
