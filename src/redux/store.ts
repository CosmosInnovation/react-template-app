import { configureStore } from '@reduxjs/toolkit';
import navSlice from './navSlice';

// Automatically adds thunk middleware and the redux DevTools extension
const store = configureStore({
  // Automatically calls `combineReducer
  reducer: {
    nav: navSlice,
  }
})
export { store }
