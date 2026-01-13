import { configureStore } from "@reduxjs/toolkit";
import unitReducer from "./unitSlice"
import favouriteReducer from "./favouriteSlice"

export const store = configureStore({
    reducer: {
        unit: unitReducer,
        favourites: favouriteReducer,
    },
});