import { createSlice } from "@reduxjs/toolkit";
import { getReservations, updateReservations, addReservation, deleteReservation } from './thunk';

export const initialState = {
  reservations: [],
};

const PropertySlice = createSlice({
  name: 'PropertySlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(getReservations.fulfilled, (state, action) => {
      state.reservations = action.payload
    });

    builder.addCase(getReservations.rejected, (state, action) => {
      state.error = action.error.message || null;
    });

    builder.addCase(updateReservations.fulfilled, (state, action) => {
      state.reservations = action.payload.data
    });

    builder.addCase(updateReservations.rejected, (state, action) => {
      state.error = action.error.message || null;
    });

    builder.addCase(addReservation.fulfilled, (state, action) => {
      state.reservations = action.payload
    });

    builder.addCase(addReservation.rejected, (state, action) => {
      state.error = action.error.message || null;
    });

    builder.addCase(deleteReservation.fulfilled, (state, action) => {
      state.reservations = action.payload
    });

    builder.addCase(deleteReservation.rejected, (state, action) => {
      state.error = action.error.message || null;
    });
  }
});

export default PropertySlice.reducer;
