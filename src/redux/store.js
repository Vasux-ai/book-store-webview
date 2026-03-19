import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './feature/cartSlice';
// Create a store instance (not a factory function).
export const store = configureStore({
  reducer: {
    cart: cartReducer
  }

})