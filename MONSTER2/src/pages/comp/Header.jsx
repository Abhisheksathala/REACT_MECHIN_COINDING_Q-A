import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="redux text-2xl underline text-purple-400">
          REACT REDUX SHOPPING CART
        </div>
        <div className="flex items-center space-x-6 text-gray-800 font-semibold">
          <ul className="flex gap-2">
            <li>home</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
