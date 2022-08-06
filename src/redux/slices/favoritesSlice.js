import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favoritesSlice",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const movieToAdd = {
        id: action.payload.id,
        title: action.payload.title,
        img: action.payload.img,
      };
      state.favorites.push(movieToAdd);
      state.counter += 1;
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload.id
      );
      state.counter -= 1;
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
