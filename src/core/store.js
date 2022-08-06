import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import { rootReducer } from './reducers/rootReducer';
import { apiSlice } from './reducers/api/apiSlice';


export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
