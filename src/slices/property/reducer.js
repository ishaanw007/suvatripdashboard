import { createSlice } from "@reduxjs/toolkit";
import { getInfo, getPhotos, getFacilities, getAmmenities, updateFacilities, updateAmmenities, getRooms, getRoomPhotos, updateRooms, addRoom, deleteRoom, getDescription, updateDescription } from './thunk';

export const initialState = {
  info: {},
  photos: [],
  error: {},
  facilities: {},
  ammenities: {},
  rooms: [],
  description: '',
  roomPhotos: []
};

const PropertySlice = createSlice({
  name: 'PropertySlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInfo.fulfilled, (state, action) => {
      state.info = action.payload.data;
    });

    builder.addCase(getInfo.rejected, (state, action) => {
      state.error = action.error.message || null;
    });

    builder.addCase(getPhotos.fulfilled, (state, action) => {
      let propertyPhoto = action?.payload?.data?.propertyPicture ? action?.payload?.data?.propertyPicture : []
      let roomPhoto = action?.payload?.data?.roomPhoto ? action?.payload?.data?.roomPicture : []
      let areaPhoto = action?.payload?.data?.areaPhoto ? action?.payload?.data?.areaPicture : []

      state.photos = [
        ...propertyPhoto,
        ...roomPhoto,
        ...areaPhoto,
      ];
    });

    builder.addCase(getPhotos.rejected, (state, action) => {
      state.error = action.error.message || null;
    });

    builder.addCase(getFacilities.fulfilled, (state, action) => {
      state.facilities = {
        ...action.payload.data.facilities
      };
    });

    builder.addCase(getFacilities.rejected, (state, action) => {
      state.error = action.error.message || null;
    });

    builder.addCase(updateFacilities.fulfilled, (state, action) => {
      console.log(action.payload);
      state.facilities = {
        ...action.payload.data.facilities
      };
    });

    builder.addCase(updateFacilities.rejected, (state, action) => {
      state.error = action.error.message || null;
    });

    builder.addCase(getAmmenities.fulfilled, (state, action) => {
      state.ammenities = action.payload.data.ammenities
    });

    builder.addCase(getAmmenities.rejected, (state, action) => {
      state.error = action.error.message || null;
    });

    builder.addCase(updateAmmenities.fulfilled, (state, action) => {
      state.ammenities = action.payload.data.ammenities
    });

    builder.addCase(updateAmmenities.rejected, (state, action) => {
      state.error = action.error.message || null;
    });

    builder.addCase(getRooms.fulfilled, (state, action) => {
      state.rooms = action.payload
    });

    builder.addCase(getRooms.rejected, (state, action) => {
      state.error = action.error.message || null;
    });

    builder.addCase(getRoomPhotos.fulfilled, (state, action) => {
      console.log(action.payload);
      state.roomPhotos = action.payload.data.roomPicture
    });

    builder.addCase(getRoomPhotos.rejected, (state, action) => {
      state.error = action.error.message || null;
    });

    builder.addCase(updateRooms.fulfilled, (state, action) => {
      state.rooms = action.payload.data
    });

    builder.addCase(updateRooms.rejected, (state, action) => {
      state.error = action.error.message || null;
    });

    builder.addCase(addRoom.fulfilled, (state, action) => {
      state.rooms = action.payload
    });

    builder.addCase(addRoom.rejected, (state, action) => {
      state.error = action.error.message || null;
    });

    builder.addCase(deleteRoom.fulfilled, (state, action) => {
      state.rooms = action.payload
    });

    builder.addCase(deleteRoom.rejected, (state, action) => {
      state.error = action.error.message || null;
    });

    builder.addCase(getDescription.fulfilled, (state, action) => {
      state.description = action.payload.data.description
    });

    builder.addCase(getDescription.rejected, (state, action) => {
      state.error = action.error.message || null;
    });

    builder.addCase(updateDescription.fulfilled, (state, action) => {
      state.description = action.payload.data.description
    });

    builder.addCase(updateDescription.rejected, (state, action) => {
      console.log(action);
      state.error = action.error.message || null;
    });
  }
});

export default PropertySlice.reducer;
