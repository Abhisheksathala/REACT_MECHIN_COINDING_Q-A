import { configureStore } from "@reduxjs/toolkit";
import cart from "./reducers/Cartslice";

export const store = configureStore({
  reducer: {
    [cart.name]: cart.reducer,
  },
});
