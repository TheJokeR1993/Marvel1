import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { charastersApi } from "../services/charastersApi";
import { comicsApi } from "../services/comicsApi";
import charastersReducer from "../features/characters";
import comicsReducer from "../features/comics";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["charaster", "comic"],
};
const rootReducer = combineReducers({
  charasters: charastersReducer,
  comics: comicsReducer,
  [charastersApi.reducerPath]: charastersApi.reducer,
  [comicsApi.reducerPath]: comicsApi.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(charastersApi.middleware, comicsApi.middleware),
});

export const persistor = persistStore(store);
export default store;
