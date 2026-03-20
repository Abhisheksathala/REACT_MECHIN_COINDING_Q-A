import React, { useLayoutEffect, useState } from "react";

const useWindowResize = () => {
  const [windowsize, setWindowsize] = useState({
    width: 0,
    height: 0,
  });

  const handleResize = () => {
    setWindowsize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowsize;
};

const UseWindowResizeHook = () => {
  const windowsize = useWindowResize();

  const { width, height } = windowsize;

  return (
    <div>
      UseWindowResize:{width} :{height}
    </div>
  );
};

export default UseWindowResizeHook;
