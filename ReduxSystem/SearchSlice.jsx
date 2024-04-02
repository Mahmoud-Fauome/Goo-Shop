const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
import axios from "axios";

export const getSearchData = createAsyncThunk(
  "getSearchData",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios({
        method: "GET",
        url: `https://dummyjson.com/products/search?q=${id}`,
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const search = createSlice({
  name: "search",
  initialState: { searchWord: [] },
  extraReducers: (builder) => {
    builder.addCase(getSearchData.pending, (state) => {});
    builder.addCase(getSearchData.fulfilled, (state, action) => {
      state.searchWord = action.payload.products;
    });
    builder.addCase(getSearchData.rejected, (state) => {});
  },
});
export default search.reducer;
