import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
// import authSlice from './authSlice';
// Automatically adds thunk middleware and the redux DevTools extension
const store = configureStore({
  // Automatically calls `combineReducer
  reducer: {
    auth: authSlice,
    // user: userSlice,
    // members: membersReducer,
  }
})
export { store }
