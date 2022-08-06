import authReducer from 'features/auth/authSlice';
import checkReducer from 'features/check/checkSlice';
import { apiSlice } from './api/apiSlice';

export const rootReducer = {
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  check: checkReducer,
};
