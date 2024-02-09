import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slices/counterSlice";
import { productsReducer } from "./slices/productsSlice";

export const myStore = configureStore({
    reducer: {
        counter: counterReducer,
        products: productsReducer,
        // product: productReducer,
    }, 
})
 