import React from 'react';

const Degitalclock = () => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  });

  // console.log(time);
  return (
    <div>
      <p className="text-4xl">Degital clock</p>
      <div className="clock">
        <div className="time ">
          <span>{time.getHours().toString().padStart(2, '0')}</span>-
          <span>{time.getMinutes().toString().padStart(2, '0')}</span>-
          <span>{time.getSeconds().toString().padStart(2, '0')}</span>
        </div>
        <div className="date">
          {time.toLocaleDateString(undefined, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
      </div>
    </div>
  );
};

export default Degitalclock;
