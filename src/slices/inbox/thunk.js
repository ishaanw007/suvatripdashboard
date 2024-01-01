import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Include Both Helper File with needed methods
import {
  getChats as getChatsApi,
  getAllChats as getAllChatsApi,
  addChat as addChatApi,
} from "../../helpers/fakebackend_helper";


export const getChats = createAsyncThunk("property/getChats", async (id) => {
  try {
    const response = getChatsApi(id);
    return response;
  } catch (error) {
    return error;
  }
});

export const getAllChats = createAsyncThunk("property/getAllChats", async (id) => {
  try {
    const response = getAllChatsApi(id);
    return response;
  } catch (error) {
    return error;
  }
});

export const addChat = createAsyncThunk("property/addChat", async (data) => {
  try {
    const response = addChatApi(data);
    return response;
  } catch (error) {
    return error;
  }
});