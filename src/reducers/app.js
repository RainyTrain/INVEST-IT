import { createSlice } from '@reduxjs/toolkit';
import { loadData } from '../asyncThunk/loadData';

const initialState = {
  list: [],
  page: 0,
  isLoading: false,
  page: 0,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loadData.fulfilled, (state, action) => {
      state.list = state.list.concat(action.payload);
      state.page = state.page + 1;
      state.isLoading = false;
    });
    builder.addCase(loadData.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { reducer: appSliceReducer } = appSlice;
