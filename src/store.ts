import { configureStore } from "@reduxjs/toolkit";

import { counterSlice } from "./reducers";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
