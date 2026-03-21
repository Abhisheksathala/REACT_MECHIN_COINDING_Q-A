import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  loader: true,
};

const cart = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      // console.log(action)
      state.cart.push(action.payload);
      state.loader = false;
    },
    removeFromCart: (state, action) => {
      // console.log(action)
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      state.loader = false;
    },
  },
});

export default cart;

export const { addToCart, removeFromCart } = cart.actions;
