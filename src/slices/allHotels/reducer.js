import { createSlice } from "@reduxjs/toolkit";
import { getHotels, updateHotelStatus } from './thunk';

export const initialState = {
  hotels: []
};

const PropertySlice = createSlice({
  name: 'HotelsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(getHotels.fulfilled, (state, action) => {
      state.hotels = action.payload.data
    });

    builder.addCase(getHotels.rejected, (state, action) => {
      state.error = action.error.message || null;
    });

    builder.addCase(updateHotelStatus.fulfilled, (state, action) => {
      state.hotels = action.payload.data
    });

    builder.addCase(updateHotelStatus.rejected, (state, action) => {
      state.error = action.error.message || null;
    });
  }
});

export default PropertySlice.reducer;
