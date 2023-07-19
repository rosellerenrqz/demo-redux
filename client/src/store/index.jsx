import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter-slice";
import authSlice from "./auth";

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;
