import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/reducers/Cartslice";

const ProductTitle = ({ products }) => {
  // console.log(products);

  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const handleaddtocart = (product) => {
    dispatch(addToCart(product));
  };

  const handleremoveFromcart = (pro) => {
    dispatch(removeFromCart(pro.id));
  };

  return (
    <div className="group flex flex-col items-center border-2 bg-green-200 border-red-800">
      <div className="h-[180px] flex items-center justify-center flex-col">
        <img
          src={products?.image}
          alt={products?.title}
          className="w-20 h-20"
        />
        <div>
          <h1 className="text-lg text-gray-800">{products?.title}</h1>
        </div>
        <div className="flex items-center justify-between w-full mt-5">
          <button
            onClick={() => {
              cart.some((item) => item.id === products.id)
                ? handleremoveFromcart(products)
                : handleaddtocart(products);
            }}
            className="px-2 py-2 bg-red-200 rounded-full"
          >
            {cart.some((item) => item.id === products.id)
              ? "remove from cart"
              : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductTitle;
