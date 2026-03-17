import React from "react";
import UselocalStorage from "./UselocalStorage";

const LightDarkMode = () => {
  const [theme, setTheme] = UselocalStorage("theme", "dark");

  const handleToggleTheme = () => {
    console.log("kkk")
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World !</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default LightDarkMode;
