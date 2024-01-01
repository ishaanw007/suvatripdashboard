import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Include Both Helper File with needed methods
import {
  getInfo as getInfoApi,
  getPhotos as getPhotosApi,
  getFacilities as getFacilitiesApi,
  getAmmenities as getAmmenitiesApi,
  updateHotel as updateHotelApi,
  getRooms as getRoomsApi,
  updateRooms as updateRoomsApi,
  addRoom as addRoomApi,
  deleteRoom as deleteRoomApi,
  getDescription as getDescriptionApi,
  getRoomPhotos as getRoomPhotosApi
} from "../../helpers/fakebackend_helper";

export const getInfo = createAsyncThunk("property/getInfo", async (id) => {
  try {
    const response = getInfoApi(id);
    return response;
  } catch (error) {
    return error;
  }
});

export const getFacilities = createAsyncThunk("property/getFacilities", async (id) => {
  try {
    const response = getFacilitiesApi();
    return response;
  } catch (error) {
    return error;
  }
});

export const updateFacilities = createAsyncThunk("property/updateFacilities", async ({id, data}) => {
  try {
    console.log(data, 'dddddddd');
    const response = updateHotelApi(id, data);
    return response;
  } catch (error) {
    return error;
  }
});

export const getAmmenities = createAsyncThunk("property/getAmmenities", async (id) => {
  try {
    const response = getAmmenitiesApi(id);
    return response;
  } catch (error) {
    return error;
  }
});

export const updateAmmenities = createAsyncThunk("property/updateAmmenities", async ({id, data}) => {
  try {
    const response = updateHotelApi(id, data);
    return response;
  } catch (error) {
    return error;
  }
});

export const getPhotos = createAsyncThunk("property/getPhotos", async (id) => {
  try {
    const response = getPhotosApi(id);
    return response;
  } catch (error) {
    return error;
  }
});

// export const deletePhotos = createAsyncThunk("property/deletePhotos", async (id) => {
//   try {
//     const response = getPhotosApi(id);
//     return response;
//   } catch (error) {
//     return error;
//   }
// });

// export const addPhotos = createAsyncThunk("property/addPhotos", async (id) => {
//   try {
//     const response = getPhotosApi(id);
//     return response;
//   } catch (error) {
//     return error;
//   }
// });

export const getRooms = createAsyncThunk("property/getRooms", async (id) => {
  try {
    const response = getRoomsApi(id);
    return response;
  } catch (error) {
    return error;
  }
});

export const getRoomPhotos = createAsyncThunk("property/getRoomPhotos", async (id) => {
  try {
    const response = getRoomPhotosApi(id);
    return response;
  } catch (error) {
    return error;
  }
});

export const addRoom = createAsyncThunk("property/addRoom", async (data) => {
  try {
    const response = addRoomApi(data);
    return response;
  } catch (error) {
    return error;
  }
});

export const updateRooms = createAsyncThunk("property/updateRooms", async ({id, data}) => {
  try {
    console.log(id, 'iiiiii');
    const response = updateRoomsApi(id, data);
    return response;
  } catch (error) {
    return error;
  }
});

export const deleteRoom = createAsyncThunk("property/deleteRoom", async (id) => {
  try {
    const response = deleteRoomApi(id);
    return response;
  } catch (error) {
    return error;
  }
});

export const getDescription = createAsyncThunk("property/getDescription", async (id) => {
  try {
    const response = getDescriptionApi(id);
    return response;
  } catch (error) {
    return error;
  }
});

export const updateDescription = createAsyncThunk("property/updateDescription", async ({id, data}) => {
  try {
    const response = updateHotelApi(id, data);
    return response;
  } catch (error) {
    return error;
  }
});