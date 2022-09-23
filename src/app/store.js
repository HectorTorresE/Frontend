import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from '../features/greetingSlice';

export const store = configureStore({
  reducer: {
    greetingSlice
  },
});
