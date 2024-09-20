import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import todoSlice from './todoSlice';
export const store = configureStore({
  reducer: {
    auth: authSlice,
    todo: todoSlice
  }
});

export default store;
