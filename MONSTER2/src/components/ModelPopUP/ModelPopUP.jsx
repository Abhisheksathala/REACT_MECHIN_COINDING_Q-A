import React from "react";

const ModelPopUP = ({ id, header, body, footer, handletogglemodelpopup }) => {
  return (
    <div
      id={id || "model"}
      className="h-[300px] w-[300px] bg-green-200 flex flex-col"
      onClick={handletogglemodelpopup}
    >
      {header}
      {body}
      {footer}
    </div>
  );
};

export default ModelPopUP;
