import React, { useState } from "react";

const Tabs = ({ tabsCotent = [], onChange }) => {
  const [CTI, setCTI] = useState(0);

  function handleOnclick(currentIndex) {
    setCTI(currentIndex);
    onChange(currentIndex);
  }

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsCotent.map((t, i) => {
          return (
            <>
              <div onClick={() => handleOnclick(i)} className="" key={i}>
                <div className="label">{t.lab}</div>
              </div>
            </>
          );
        })}
      </div>
      <div className="content">
        {tabsCotent[CTI] && tabsCotent[CTI].content}
      </div>
    </div>
  );
};

export default Tabs;
