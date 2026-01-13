import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("favorites")) || [],
  max: 3,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const city = action.payload;

      if (state.items.includes(city)) {
        state.items = state.items.filter((c) => c !== city);
      } else {
        if (state.items.length >= state.max) {
          return; 
        }
        state.items.push(city);
      }

      localStorage.setItem("favorites", JSON.stringify(state.items));
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
