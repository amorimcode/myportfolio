import { createSlice } from "@reduxjs/toolkit";

export const repositoriesSlice = createSlice({
  name: "repositories",
  initialState: {
    value: [],
  },
  reducers: {
    setRepositories: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRepositories } = repositoriesSlice.actions;

export default repositoriesSlice.reducer;
