import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Include Both Helper File with needed methods
import {
  getHotels as getHotelsAPI,
  updateHotelStatus as updateHotelStatusApi,
} from "../../helpers/fakebackend_helper";

export const getHotels = createAsyncThunk("property/getHotels", async () => {
  try {
    const response = getHotelsAPI();
    return response;
  } catch (error) {
    return error;
  }
});

export const updateHotelStatus = createAsyncThunk("property/updateHotelStatus", async ({id, data}) => {
  try {
    console.log(id);
    const response = updateHotelStatusApi(id, data);
    return response;
  } catch (error) {
    return error;
  }
});