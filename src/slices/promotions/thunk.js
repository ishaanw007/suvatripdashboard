import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Include Both Helper File with needed methods
import {
  getPromotions as getPromotionsApi,
  updatePromotions as updatePromotionsApi,
  addPromotion as addPromotionApi,
  deletePromotion as deletePromotionApi,
} from "../../helpers/fakebackend_helper";

export const getPromotions = createAsyncThunk("property/getPromotions", async (id) => {
  try {
    const response = getPromotionsApi(id);
    return response;
  } catch (error) {
    return error;
  }
});

export const addPromotion = createAsyncThunk("property/addPromotion", async (data) => {
  try {
    const response = addPromotionApi(data);
    return response;
  } catch (error) {
    return error;
  }
});

export const updatePromotions = createAsyncThunk("property/updatePromotions", async ({id, data}) => {
  try {
    console.log(id, 'iiiiii');
    const response = updatePromotionsApi(id, data);
    return response;
  } catch (error) {
    return error;
  }
});

export const deletePromotion = createAsyncThunk("property/deletePromotion", async (id) => {
  try {
    const response = deletePromotionApi(id);
    return response;
  } catch (error) {
    return error;
  }
});