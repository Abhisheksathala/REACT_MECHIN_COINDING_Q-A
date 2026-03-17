import React, { useState } from 'react';

const Progressbar = () => {
  const [width, setWidth] = useState(0);

  const handlepersentage = (event) => {
    if (event.target.value > 100) {
      alert('plz enter less then 100');
    } else {
      setWidth(event.target.value);
    }
  };

  return (
    <div>
      <h1 className="text-4xl">Progressbar</h1>
      <div className="progressbra">
        <div className="wrapper">
          {width >= 0 && width <= 100 ? (
            <>
              <div
                className="bg-red-500 transition-all duration-500 ease-linear p-4"
                style={{ width: `${width}%` }}
              >
                {width}
              </div>
            </>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="inputconatier">
        <label htmlFor="">inputpersent-age</label>

        <input type="number" value={width} onChange={handlepersentage} name="" id="" />
      </div>
    </div>
  );
};

export default Progressbar;
