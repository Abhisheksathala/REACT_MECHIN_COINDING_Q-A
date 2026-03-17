import React from "react";

const Tooltip = ({ children, content }) => {
  const [isvisbale, setIsvisable] = React.useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        setIsvisable(true);
      }}
      onMouseLeave={() => {
        setIsvisable(false);
      }}
    >
      <p className="bg-red-200 inline-block"> {children}</p>

      <div>
        {isvisbale ? (
          <div className="transition-all ease-in-out duration-300 delay-100">
            {content}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Tooltip;
