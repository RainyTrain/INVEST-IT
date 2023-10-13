import { configureStore } from '@reduxjs/toolkit';
import app, { appSliceReducer } from './reducers/app';

export const store = configureStore({
  reducer: {
    mainReducer: appSliceReducer,
  },
});
