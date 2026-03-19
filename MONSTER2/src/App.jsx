import React from "react";
import Accordian from "./components/accordian/Accordian";
import Color from "./components/Randomcolor/Color";
import Starcomponent from "./components/Starcomponent/Starcomponent";
import SliderImage from "./components/SliderImage/SliderImage";
import LoadMoreData from "./components/Loadmore/Loadmore";
import TreeView from "./components/TreeView/TreeView";
import menus from "./components/TreeView/data";
import QrcodeGen from "./components/QRcode/QrcodeGen";
import LightDarkMode from "./components/D&LTheam/LightDarkMode";
import Sscrollindecater from "./components/scrollindecater/Sscrollindecater";
import CustomeTabs from "./components/CustomeTabs/CustomeTabs";
import ModelPopUP from "./components/ModelPopUP/ModelPopUP";
import Model from "./components/ModelPopUP/Model";
import GithubProfileFinder from "./components/githubProfileFinder/githubProfileFinder";
import SearchAutoComple from "./components/SearchAutoComple/SearchAutoComple";

const App = () => {
  return (
    <div>
      {/* Accordian */}
      {/* <Accordian /> */}
      {/* Color */}
      {/* <Color /> */}
      {/* Starcomponent */}
      {/* <Starcomponent /> */}
      {/* SliderImage */}
      {/* <SliderImage
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}
      {/* LoadMoreData */}
      {/* <LoadMoreData /> */}
      {/* TreeView */}
      {/* <TreeView menus={menus} /> */}
      {/* QR */}
      {/* <QrcodeGen /> */}
      {/* Light and Dark mode */}
      {/* <LightDarkMode /> */}
      {/* <Sscrollindecater url={'https://dummyjson.com/products?limit=100'}/> */}
      {/* <CustomeTabs /> */}
      {/* <Model /> */}
      {/* <GithubProfileFinder /> */}
      <SearchAutoComple />
    </div>
  );
};

export default App;
