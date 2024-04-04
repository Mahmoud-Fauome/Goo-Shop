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
  initialState: { searchWord: [], searchWordLoad: true },
  extraReducers: (builder) => {
    builder.addCase(getSearchData.pending, (state) => {
      state.searchWordLoad = true;
    });
    builder.addCase(getSearchData.fulfilled, (state, action) => {
      state.searchWordLoad = false;
      state.searchWord = action.payload.products;
    });
    builder.addCase(getSearchData.rejected, (state) => {
      state.searchWordLoad = false;
    });
  },
});
export default search.reducer;
