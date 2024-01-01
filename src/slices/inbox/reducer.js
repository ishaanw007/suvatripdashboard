import { createSlice } from "@reduxjs/toolkit";
import { getChats, addChat, getAllChats } from './thunk';

export const initialState = {
  chats: [],
  allChats: []
};

const PropertySlice = createSlice({
  name: 'PropertySlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getChats.fulfilled, (state, action) => {
      state.chats = action.payload
    });

    builder.addCase(getChats.rejected, (state, action) => {
      state.error = action.error.message || null;
    });

    builder.addCase(getAllChats.fulfilled, (state, action) => {
      state.allChats = action.payload
    });

    builder.addCase(getAllChats.rejected, (state, action) => {
      state.error = action.error.message || null;
    });

    builder.addCase(addChat.fulfilled, (state, action) => {
      state.chats = action.payload
    });

    builder.addCase(addChat.rejected, (state, action) => {
      state.error = action.error.message || null;
    });
  }
});

export default PropertySlice.reducer;
