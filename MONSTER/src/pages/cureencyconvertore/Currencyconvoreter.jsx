import React, { useEffect, useState } from "react";
import axios from "axios";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromC, setFromC] = useState("USD");
  const [toC, setToC] = useState("INR");
  const [exchange, setExchange] = useState();
  const [converted, setConverted] = useState();

  async function fetchC() {
    try {
      const apiResponse = await axios.get(
        `https://open.er-api.com/v6/latest/${fromC}`,
      );
      const result = apiResponse.data;
      const rate = result?.rates[toC];
      setExchange(rate);
      setConverted(amount * rate);
    } catch (error) {
      console.log(error);
      setExchange(undefined);
      setConverted(undefined);
    }
  }

  useEffect(() => {
    fetchC();
  }, [fromC, toC, amount]);

  return (
    <div>
      <h1 className="text-4xl">Currency Converter</h1>
      <input
        type="number"
        min="1"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        id="currency"
      />
      <select value={fromC} onChange={(e) => setFromC(e.target.value)}>
        <option value="USD">USD</option>
        <option value="INR">INR</option>
        <option value="EUR">EUR</option>
      </select>
      <p>TO</p>
      <input type="text" readOnly value={converted || ""} />
      <select value={toC} onChange={(e) => setToC(e.target.value)}>
        <option value="EUR">EUR</option>
        <option value="INR">INR</option>
        <option value="USD">USD</option>
      </select>
      <p>
        Exchange rate: {amount} {fromC} = {exchange} {toC}
      </p>
    </div>
  );
};

export default CurrencyConverter;
