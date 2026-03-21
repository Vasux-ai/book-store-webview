import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './feature/cartSlice';
import bookApi from './feature/bookApi';
// Create a store instance (not a factory function).
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [bookApi.reducerPath]: bookApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware), 
})