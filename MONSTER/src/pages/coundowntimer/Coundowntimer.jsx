import React from "react";

const Coundowntimer = ({ intialtime, ontimefiniesh }) => {
  const [time, setTime] = React.useState(intialtime);
  const [isRunning, setIsRunning] = React.useState(true);

  const intervelRef = React.useRef();

  React.useEffect(() => {
    if (isRunning) {
      // intervel
      intervelRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(intervelRef.current);
            setIsRunning(false);

            if (ontimefiniesh) {
              ontimefiniesh();
            }

            return 0;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
    } else {
      clearInterval(intervelRef.current);
    }
    return () => {
      clearInterval(intervelRef.current);
    };
  }, [isRunning, ontimefiniesh]);

  const handlpusesndresume = () => {
    setIsRunning((prev) => !prev);
  };

  const rest = () => {
    clearInterval(intervelRef.current);
    setTime(intialtime);
  };

  const start = () => {
    setIsRunning(true);
  };

  const minutes = Math.ceil(time / 60);
  const seconds = Math.ceil(time % 60);

  return (
    <div className="timer">
      <p>
        {String(minutes).padStart(2, "0")} :{String(seconds).padStart(2, "0")}
      </p>
      <button
        onClick={() => {
          handlpusesndresume();
        }}
        className="px-2"
      >
        {isRunning ? "puse" : "resume"}
      </button>
      <button
        onClick={() => {
          rest();
        }}
        className="px-2"
      >
        reset
      </button>
      <button
        onClick={() => {
          start();
        }}
        className="px-2"
      >
        start
      </button>
    </div>
  );
};

export default Coundowntimer;
