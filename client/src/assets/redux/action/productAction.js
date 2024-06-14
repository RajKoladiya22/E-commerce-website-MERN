import { useState } from "react";
import axios from "../../utils/axiosConfig";
import { toast } from "react-toastify";

export const GET_PRODUCT = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/api/v1/Products");

      dispatch({
        type: "GET_PRODUCT_SUCCESS",
        payload: response,
      });
    } catch (err) {
      toast.err(`Error: ${err.response.data.message}`);
      console.log(`Error: ${err.response.data.message}`);
      return false;
    }
  };
};

export const POST_PRODUCT = (product) => {
  return async (dispatch) => {
    dispatch({ type: "PRODUCT_UPLOAD_START" });
    try {
      const response = await axios.post("/api/v1/addProduct", product, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response) {
        dispatch(GET_PRODUCT());
        toast(`${response.data.message}`);
      }
    } catch (err) {
      toast.error(`Error: ${err.response.data.message}`);
      console.log(`Error: ${err.response.data.message}`);
      console.log(err);
      return false;
    } finally {
      dispatch({ type: "PRODUCT_UPLOAD_END" });
    }
  };
};

export const   EDIT_PRODUCT = (id) => {
  console.log(id);
  return async (dispatch) => {
    const response = await axios.put(`/api/v1/UpdateProduct`, id);
    if (response) {
      console.log('doneee')
      dispatch(GET_PRODUCT());
      toast(`${response.data.message}`);
    }

    try {
      console.log(id)
    } catch (err) {
      toast.error(`Error: ${err.response.data.message}`);
      console.log(`Error: ${err.response.data.message}`);
      console.log(err);
      return false;
    }
  };
};
export const   DELETE_PRODUCT = (id) => {
  return async (dispatch) => {
    const response = await axios.delete(`/api/v1/DeleteProduct?id=${id}`);
    if (response) {
      dispatch(GET_PRODUCT());
      toast(`${response.data.message}`);
    }

    try {
      console.log(id)
    } catch (err) {
      toast.error(`Error: ${err.response.data.message}`);
      console.log(`Error: ${err.response.data.message}`);
      console.log(err);
      return false;
    }
  };
};
