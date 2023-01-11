import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const ITEMS_URL = "https://fakestoreapi.com/products";
const MenClothing_Url = "https://fakestoreapi.com/products/category/jewelery";

const initialState = {
  items: [],
  status: "idle", // 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const response = await axios.get(ITEMS_URL);
  return response.data;
});

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchItems.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllItems = (state) => state.items.items;
export const selectMenWear = (state) => {
  // state.items.items.filter((item) => item.category === "men's clothing");
  const menWear = state.items.items.filter(
    (item) => item.category === "men's clothing"
  );
  console.log(state.items.items);

  return menWear;
};
export const selectWomenWear = (state) => {
  return state.items.items.filter(
    (item) => item.category === "women's clothing"
  );
};
export const selectEletronic = (state) => {
  return state.items.items.filter((item) => item.category === "electronics");
};
export const selectJewelery = (state) => {
  return state.items.items.filter((item) => item.category === "jewelery");
};
export const selectItemById = (state, itemId = 3) => {
  const selectById = state.items.items.find((item) => item.id === itemId);
  // console.log(selectById);
  console.log(state.items.items);
  return selectById;
};

export default itemsSlice.reducer;
