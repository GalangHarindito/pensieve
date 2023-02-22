import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import storage from 'redux-persist/lib/storage'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import allReducers from './store/reducers'
import {blacklist, whitelist} from './store/list'

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: blacklist,
  whitelist: whitelist
}

const persistedReducer = persistReducer(persistConfig, allReducers)
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(),
})
setupListeners(store.dispatch)
export default store