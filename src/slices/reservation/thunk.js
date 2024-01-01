import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Include Both Helper File with needed methods
import {
  getReservations as getReservationsApi,
  updateReservations as updateReservationsApi,
  addReservation as addReservationApi,
  deleteReservation as deleteReservationApi,
} from "../../helpers/fakebackend_helper";

export const getReservations = createAsyncThunk("property/getReservations", async (id) => {
  try {
    const response = getReservationsApi(id);
    return response;
  } catch (error) {
    return error;
  }
});

export const addReservation = createAsyncThunk("property/addReservation", async (data) => {
  try {
    const response = addReservationApi(data);
    return response;
  } catch (error) {
    return error;
  }
});

export const updateReservations = createAsyncThunk("property/updateReservations", async ({id, data}) => {
  try {
    console.log(id, 'iiiiii');
    const response = updateReservationsApi(id, data);
    return response;
  } catch (error) {
    return error;
  }
});

export const deleteReservation = createAsyncThunk("property/deleteReservation", async (id) => {
  try {
    const response = deleteReservationApi(id);
    return response;
  } catch (error) {
    return error;
  }
});