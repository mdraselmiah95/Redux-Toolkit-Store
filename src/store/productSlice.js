const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    setProducts(state, action) {
      //   const res = await fetch("https://fakestoreapi.com/products"); don't do that
      // setProducts(state, action) {
      //     state.data = action.payload;
      // },
      // setStatus(state, action) {
      //     state.status = action.payload;
      // },
    },
  },
});
