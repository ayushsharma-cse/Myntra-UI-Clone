import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Slice/product_slice";

const store = configureStore({
  reducer: {
    product: ProductReducer,
  },
});
export default store;
