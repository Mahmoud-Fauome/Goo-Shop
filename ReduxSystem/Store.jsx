import { configureStore } from "@reduxjs/toolkit";
import products from "./ProductsSlice";
import search from "./SearchSlice";
import productsDetails from "./DetailsSlice";
import categoriesSlice from "./CategoriesSlice";
const warehouse = configureStore({
  reducer: {
    products,
    search,
    categoriesSlice,
    productsDetails,
  },
});
export default warehouse;
