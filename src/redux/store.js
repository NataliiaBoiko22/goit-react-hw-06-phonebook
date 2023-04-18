import { configureStore, combineReducers } from '@reduxjs/toolkit';
import contactsSlice from './contactsSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['contacts'],
  };
  const persistedReducer = persistReducer(persistConfig, contactsSlice);

  const rootReducer = combineReducers({
  contacts: persistedReducer,
  });

  export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });
  
  export const persistor = persistStore(store);