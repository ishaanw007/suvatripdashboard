import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Include Both Helper File with needed methods
import {
  getReviews as getReviewsApi,
} from "../../helpers/fakebackend_helper";

export const getReviews = createAsyncThunk("property/getReviews", async ({id, filter}) => {
  try {
    const response = getReviewsApi(id, filter);
    return response;
  } catch (error) {
    return error;
  }
});