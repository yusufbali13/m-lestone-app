import { createSlice } from "@reduxjs/toolkit";

const dashSlice = createSlice({
  name: "blog",

  initialState: {
    loading: false,
    error: false,
    blogs: [],
    details: [],
  },

  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },

    getBlogSuccess: (state, { payload }) => {
      state.loading = false;
      state[payload.url] = payload.data;
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, fetchFail, getBlogSuccess } = dashSlice.actions;
export default dashSlice.reducer;
