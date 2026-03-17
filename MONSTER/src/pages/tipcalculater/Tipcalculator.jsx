import React, { useState } from 'react';

const Tipcalculator = () => {
  const [billAmount, setBillamount] = useState(null);
  const [tippersentage, setTippersentage] = useState(10);
  const [splitcount, setSplitcount] = useState(1);
  const [tipAmount, setTipAmount] = useState(0);
  const [Error, setError] = useState(null);

  const handlecalculatetip = () => {
    if (!billAmount || billAmount <= 0 || !tippersentage || tippersentage <= 0) {
      setError('plz enter valid inputes');
      return;
    }

    const bill = parseFloat(billAmount);
    const tip = (bill * tippersentage) / 100;
    const totalamount = bill + tip;
    const tipperperson = tip / splitcount;
    const totalamountperperson = totalamount / splitcount;

    setTipAmount({
      totalamount: totalamount.toFixed(2),
      tipperperson: tipperperson.toFixed(2),
      totalperperson: totalamountperperson.toFixed(2),
    });
  };

  return (
    <div>
      <h1 className="text-4xl">Tipcalculator</h1>
      <div className="inputconatiner">
        <label htmlFor="">Bill-Amount</label>
        <input type="number" value={billAmount} onChange={(e) => setBillamount(e.target.value)} />
      </div>
      <div className="inputconatiner">
        <label htmlFor="">tip-percentage</label>
        <input
          type="number"
          value={tippersentage}
          onChange={(e) => setTippersentage(e.target.value)}
        />
      </div>
      <div className="inputconatiner">
        <label htmlFor="">number of people</label>
        <input type="number" value={splitcount} onChange={(e) => setSplitcount(e.target.value)} />
      </div>
      <button
        onClick={() => {
          handlecalculatetip();
        }}
      >
        calculate tip
      </button>
      <div>{tipAmount.totalamount}</div>
      <div>{tipAmount.tipperperson}</div>
      <div>{tipAmount.totalperperson}</div>
    </div>
  );
};

export default Tipcalculator;
