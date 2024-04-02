import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getProducts = createAsyncThunk(
  "getProducts",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios({
        method: "GET",
        url: "https://dummyjson.com/products",
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const products = createSlice({
  name: "product",
  initialState: {
    products: [],
    smartPhones: [],
    laptops: [],
    fragrances: [],
    skinCare: [],
    groceries: [],
    homeDecoration: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {});

    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload.products;
      state.smartPhones = action.payload.products.filter(
        (smartPhone, index) => {
          return index < 5;
        }
      );
      state.laptops = action.payload.products.slice(5, 10);
      state.fragrances = action.payload.products.slice(10, 15);
      state.skinCare = action.payload.products.slice(15, 20);
      state.groceries = action.payload.products.slice(20, 25);
      state.homeDecoration = action.payload.products.slice(25, 30);
    });

    builder.addCase(getProducts.rejected, (state) => {});
  },
});
export default products.reducer;
