import React, { useEffect, useState } from "react";
import Header from "./comp/Header";
import ProductTitle from "./comp/ProductTitle";
import Cart from "./Cart";

const Home = () => {
  const [prod, setProd] = useState([]);
  const [load, setLoad] = useState(false);

  async function featchProducts() {
    setLoad(true);
    const res = await fetch("https://fakestoreapi.com/products");

    const data = await res.json();

    if (res) {
      setProd(data);
      setLoad(false);
    }
  }

  useEffect(() => {
    featchProducts();
  }, []);

  return (
    <div>
      <Header />
      {load ? (
        "loading"
      ) : (
        <div className="h-[75vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl space-y-10 mx-auto px-3 bg-pink-200 gap-4 overflow-hidden">
          {prod && prod.length > 0
            ? prod.map((items, index) => {
                return (
                  <React.Fragment key={index}>
                    <ProductTitle products={items} />
                  </React.Fragment>
                );
              })
            : "no products"}
        </div>
      )}

      <Cart />
    </div>
  );
};

export default Home;
