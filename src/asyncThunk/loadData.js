import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPhotos } from '../api';

export const loadData = createAsyncThunk('get data', async ({ page }) => {
  const data = await fetchPhotos({ perPage: 30, page: page });
  console.log(data.images);

  return data.images;
});
