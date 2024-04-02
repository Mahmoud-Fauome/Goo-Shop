const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
import axios from "axios";
export const getCategories = createAsyncThunk(
  "getCategories",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios({
        method: "GET",
        url: `https://dummyjson.com/products/category/${id}`,
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const categoriesSlice = createSlice({
  name: "cat",
  initialState: { categories: [], categoriesLoad: true },
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.categoriesLoad = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categoriesLoad = false;
      state.categories = action.payload.products;
    });

    builder.addCase(getCategories.rejected, (state) => {
      state.categoriesLoad = false;
    });
  },
});
export default categoriesSlice.reducer;
