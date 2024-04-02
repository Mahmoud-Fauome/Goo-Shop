import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getDetails = createAsyncThunk(
  "getDetails",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios({
        method: "GET",
        url: `https://dummyjson.com/products/${id}`,
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const productsDetails = createSlice({
  name: "product",
  initialState: { prodDetails: [], addToCart: [], count: 1 },
  reducers: {
    add: (state) => {
      state.addToCart.push(state.prodDetails);
    },
    // funDelete: (state, product) => {
    //   state.addToCart.filter((prod) => {
    //     if (prod.id !== product.payload.id) {
    //       return prod;
    //     }
    //   });
    //   return state.addToCart;
    // },
    funDeleteAll: (state) => {
      state.addToCart = [];
    },
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDetails.pending, (state, action) => {});

    builder.addCase(getDetails.fulfilled, (state, action) => {
      state.prodDetails = action.payload;
    });

    builder.addCase(getDetails.rejected, (state) => {});
  },
});
export default productsDetails.reducer;
export const { increment, decrement, add, funDelete, funDeleteAll } =
  productsDetails.actions;
