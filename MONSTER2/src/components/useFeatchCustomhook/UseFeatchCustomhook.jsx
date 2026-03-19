import { useEffect, useState } from "react";

const UseFeatchCustomhook = (url, options = {}) => {
  // 3 sates
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    setPending(true);
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);
      const result = await response.json();
      setData(result);
      setError(null);
      setPending(false);
    } catch (error) {
      console.log(error, ". some error occured");
      setData(error);
      setPending(false);
    } finally {
      setError(null);
      setPending(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return {
    data,
    error,
    pending,
  };
};

const UseFeatchCustomhookInreal = () => {
  const { data, error, pending } = UseFeatchCustomhook(
    "https://dummyjson.com/products",
    {},
  );

  console.log(data, error, pending);

  return <div>UseFeatchCustomhook {data.products.length}</div>;
};

export default UseFeatchCustomhookInreal;
