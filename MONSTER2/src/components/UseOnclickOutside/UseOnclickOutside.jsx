import React, { useEffect, useRef, useState } from "react";

function useOutsideHook(ref, handler) {
  useEffect(() => {
    function listener(event) {
      if (!ref.current || !ref.current.contains(event.target)) {
        return;
      }
      // console.log("click");
      handler(event);
      // console.log("click2");
    }

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

const UseOnclickOutside = () => {
  const ref = useRef();
  const [show, setShow] = useState(false);
  useOutsideHook(ref, () => setShow(false));

  return (
    <div className="bg-green-200  h-full">
      UseOnclickOutside
      <div ref={ref} className="">
        {show ? (
          <div className="text-2xl font-semibold">Toggel</div>
        ) : (
          <button
            className="px-2 py-2 bg-red-500"
            onClick={() => setShow(true)}
          >
            show content
          </button>
        )}
      </div>
    </div>
  );
};

export default UseOnclickOutside;
