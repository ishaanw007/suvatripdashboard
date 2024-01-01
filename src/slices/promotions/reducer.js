import { createSlice } from "@reduxjs/toolkit";
import { getPromotions, updatePromotions, addPromotion, deletePromotion } from './thunk';

export const initialState = {
  promotions: [],
};

const PropertySlice = createSlice({
  name: 'PropertySlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(getPromotions.fulfilled, (state, action) => {
      state.promotions = action.payload
    });

    builder.addCase(getPromotions.rejected, (state, action) => {
      state.error = action.error.message || null;
    });

    builder.addCase(updatePromotions.fulfilled, (state, action) => {
      state.promotions = action.payload.data
    });

    builder.addCase(updatePromotions.rejected, (state, action) => {
      state.error = action.error.message || null;
    });

    builder.addCase(addPromotion.fulfilled, (state, action) => {
      state.promotions = action.payload
    });

    builder.addCase(addPromotion.rejected, (state, action) => {
      state.error = action.error.message || null;
    });

    builder.addCase(deletePromotion.fulfilled, (state, action) => {
      state.promotions = action.payload
    });

    builder.addCase(deletePromotion.rejected, (state, action) => {
      state.error = action.error.message || null;
    });
  }
});

export default PropertySlice.reducer;
