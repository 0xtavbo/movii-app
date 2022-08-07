import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import favoritesReducer from "./slices/favoritesSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

const rootPersistConfig = {
  key: "root",
  storage: storage,
};

const userPersistConfig = {
  key: "user",
  storage,
  blacklist: ["isLoggedIn"],
};

const favoritesPersistConfig = {
  key: "favorites",
  storage,
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);
