import React, { useEffect, useState } from 'react';

const Buttonripple = () => {
  const [isre, setIsre] = useState(false);
  const [coordinate, setCoordinate] = useState({ x: -1, y: -1 });

  const handelrep = (event) => {
    const rect = event.target.getBoundingClientRect();
    let x = event.clientX;
    let y = event.clientY;
    setCoordinate({
      x: x - rect.left,
      y: y - rect.top,
    });
  };
  useEffect(() => {
    if (coordinate.x !== -1 && coordinate.y !== -1) {
      setIsre(true);
      setTimeout(() => {
        setIsre(false);
      }, 500);
    } else {
      setIsre(false);
    }
  }, [coordinate]);
  useEffect(() => {
    if (!isre) {
      setCoordinate({
        x: -1,
        y: -1,
      });
    }
  }, [isre]);

  return (
    <>
      <h1 className="text-4xl">Buttonripple</h1>
      <div className="flex items-center justify-center w-[500px] m-auto">
        <button
          className="rounded-lg border-0 px-3 py-3 relative overflow-hidden  bg-green-500 text-2xl text-white font-semibold "
          onClick={(event) => {
            handelrep(event);
          }}
        >
          {isre ? (
            <span
              className="w-6 h-6 absolute bg-blue-600 block opacity-60 rounded-full transition-all duration-300 ease-in-out "
              style={{
                left: coordinate.x,
                top: coordinate.y,
                width: '100px',
                height: '100px',
                transform: 'translate(-50%, -50%)',
                animation: 'ripple 0.6s linear',
              }}
            ></span>
          ) : null}
          Ripple Me babe ❤️
        </button>
      </div>
      <style>
        {`
          @keyframes ripple {
            from {
              transform: translate(-50%, -50%) scale(0);
              opacity: 0.8;
            }
            to {
              transform: translate(-50%, -50%) scale(8);
              opacity: 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default Buttonripple;
