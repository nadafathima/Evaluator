// Redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import calculatorSlice from "./calculatorSlice";

const store = configureStore({
  reducer: {
    expressionReducer: calculatorSlice,
  },
});

export default store;
