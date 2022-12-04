import { configureStore } from "@reduxjs/toolkit";

import { counterSlice } from "./reducers";
import { repositoriesSlice } from "./slices/repositoriesSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    repositoriesReducer: repositoriesSlice.reducer,
  },
});

export default store;
