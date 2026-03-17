import { useState } from "react";
import MenuList from "./Menulist";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentlabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
    });
  }

  console.log(displayCurrentChildren);

  return (
    <li className="ml-4 my-1">
      <div className="flex items-center gap-2 p-1 hover:bg-gray-100 rounded cursor-pointer">
        <p className="text-gray-700">{item.label}</p>
        {item && item.children && item.children.length ? (
          <span 
            onClick={() => handleToggleChildren(item.label)}
            className="p-1 hover:bg-gray-200 rounded"
          >
            {displayCurrentChildren[item.label] ? (
              <FaMinus className="text-gray-600" size={16} />
            ) : (
              <FaPlus className="text-gray-600" size={16} />
            )}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <div className="ml-4">
          <MenuList list={item.children} />
        </div>
      ) : null}
    </li>
  );
}