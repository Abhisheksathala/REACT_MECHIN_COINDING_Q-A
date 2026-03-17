import React from "react";
import Tabs from "./Tabs";

const CustomeTabs = () => {
  const tabs = [
    {
      lab: "tab 1",
      content: <div>this is tab 1</div>,
    },
    {
      lab: "tab 2",
      content: <div>this is tab 2</div>,
    },
    {
      lab: "tab 3",
      content: <div>this is tab 3</div>,
    },
  ];

  function handlechnage(currentTabIndex) {
    console.log(currentTabIndex);
    console.log(tabs[currentTabIndex])
  }

  return <Tabs tabsCotent={tabs} onChange={handlechnage} />;
};

export default CustomeTabs;
