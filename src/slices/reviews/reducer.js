import { createSlice } from "@reduxjs/toolkit";
import { getReviews } from './thunk';

export const initialState = {
  reviews: [],
  isReviewSuccess: false
};

const PropertySlice = createSlice({
  name: 'PropertySlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getReviews.pending, (state, action) => {
      state.isReviewSuccess = false;
    });

    builder.addCase(getReviews.fulfilled, (state, action) => {
      state.reviews = action.payload
      state.isReviewSuccess = true
    });

    builder.addCase(getReviews.rejected, (state, action) => {
      state.isReviewSuccess = true
      state.error = action.error.message || null;
    });
  }
});

export default PropertySlice.reducer;
