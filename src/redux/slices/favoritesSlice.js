import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favoritesSlice",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites = { ...state.favorites, ...action.payload };
    },
    removeFromFavorites: (state) => {
      state.favorites = {};
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
