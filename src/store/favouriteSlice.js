import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: JSON.parse(localStorage.getItem("favourites")) || [], 
};

const favouritesSlice = createSlice({
    name: "favourites",
    initialState,
    reducers: {
        toggleFavourite: (state, action) => {
            const city = action.payload;

            if (state.items.includes(city)) {
                state.items = state.items.filter((c) => c != city);
            } else {
                state.items.push(city); 
            }

            localStorage.setItem("favourites", JSON.stringify(state.items));
        },
    },
});

export const { toggleFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer; 