import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import storageSession from "reduxjs-toolkit-persist/lib/storage/session";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

const rootPersistConfig = {
  key: "root",
  storage,
};

const userPersistConfig = {
  key: "user",
  storage,
  blacklist: ["isLoggedIn"],
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);
