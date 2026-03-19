import React, { useState } from "react";
import ModelPopUP from "./ModelPopUP";

const Model = () => {
  const [showModelpopup, setShowmodel] = useState(false);

  const handletogglemodelpopup = () => {
    setShowmodel((prev) => !prev);
  };

  return (
    <div onClick={handletogglemodelpopup}>
      <button>MOdel popup</button>
      {showModelpopup && (
        <ModelPopUP
          id={1}
          header={"hello"}
          body={"this is body"}
          footer={"this is footer"}
          handletogglemodelpopup={handletogglemodelpopup}
        />
      )}
    </div>
  );
};

export default Model;
