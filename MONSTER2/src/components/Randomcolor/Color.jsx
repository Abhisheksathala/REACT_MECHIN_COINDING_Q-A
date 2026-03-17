import React, { useEffect, useState } from "react";

const Color = () => {
  const [typeOfcolor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handlecreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor = hexColor + hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
    console.log(hexColor);
  }

  function handlecreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeOfcolor === "rgb") handlecreateRandomRgbColor();
    else handlecreateRandomHexColor();
  }, [typeOfcolor]);

  return (
    <div>
      <h1 className="text-4xl ">Color</h1>
      <div className="flex gap-3 flex-row">
        <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>

        <button
          className="bg-green-200"
          onClick={
            typeOfcolor === "hex"
              ? handlecreateRandomHexColor
              : handlecreateRandomRgbColor
          }
        >
          Genrate Random Color
        </button>
      </div>
      <div className={`h-screen w-screen`} style={{ backgroundColor: color }}>
        <div className="text-4xl">{color}</div>
      </div>
    </div>
  );
};

export default Color;
