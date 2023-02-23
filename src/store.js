import { configureStore, combineReducers } from "@reduxjs/toolkit";
import localeReducer from "./reducers/location";
import dataReducer from "./reducers/data";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import tagReducer from "./reducers/tags";
import newsDataReducer from "./reducers/newsData";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  locale: localeReducer,
  data: dataReducer,
  tags: tagReducer,
  newsData: newsDataReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
