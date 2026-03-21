import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/reducers/Cartslice";

function CartTile({ cartItem }) {
  const dispatch = useDispatch();
  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  }

  return (
    <>
      <div className="flex items-center p-5 justify-between bg-red-500 mt-2 mb-2 rounded-xl">
        <div className="flex p-3">
          <img
            src={cartItem?.image}
            className="h-28 rounded-lg"
            alt={cartItem?.title}
          />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-xl text-white font-bold">{cartItem?.tile}</h1>
            <p className="text-white font-extrabold">{cartItem?.price}</p>
          </div>
        </div>
        <div>
          <button
            onClick={handleRemoveFromCart}
            className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
          >
            Remove From cart
          </button>
        </div>
      </div>
    </>
  );
}

const Cart = () => {
  const [total, setTotalCart] = useState();

  const { cart } = useSelector((state) => state.cart);
  console.log(cart, total);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      <div className="flex justify-center">
        {cart && cart.length ? (
          <>
            <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
              <div className="flex flex-col justify-center items-center p-3">
                {cart.map((cartItem) => (
                  <CartTile cartItem={cartItem} />
                ))}
              </div>
            </div>
            <div className="w-[300px]">
              <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
                <h1 className="font-bold text-lg text-red-800">
                  Your Cart Summary
                </h1>
                <p>
                  <span className="text-gray-800 font-bold">Total Item</span>
                  <span>: {cart.length}</span>
                </p>
                <p>
                  <span className="text-gray-800 font-bold">Total Amount</span>
                  <span>: {total}</span>
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="min-h-[80vh] flex flex-col items-center justify-center">
            <h1 className="text-gray-800 font-bold text-xl mb-2">
              Your cart is empty
            </h1>

            <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
              SHOP NOW
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
