import React, { useEffect, useState } from "react";
import QRcode from "react-qr-code";

const QrcodeGen = () => {
  const [qr, setQr] = useState("");
  const [text, setT] = useState("");

  const h = () => {
    setQr(text);
    setT("");
  };

  return (
    <div>
      <h1 className="text-2xl">QrcodeGen</h1>
      <input
        onChange={(e) => setT(e.target.value)}
        type="text"
        value={text}
        name="text"
        placeholder="enter your value here man"
        id="id"
      />
      <button onClick={() => h()}>Genrate</button>
      <div>{qr && <QRcode id="qr-code-value" size={400} value={qr} />}</div>
    </div>
  );
};

export default QrcodeGen;
