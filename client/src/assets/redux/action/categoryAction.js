import axios from "../../utils/axiosConfig";
import { toast } from "react-toastify";

export const GET_CATEGORY = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/api/v1/Categorys");
       
      dispatch({
        type: "GET_CATEGORY_SUCCESS",
        payload: response.data,
      });
    } catch (err) {
      toast.error(`Error: ${err.response.data.message}`);
      return false;
    }
  };
};

export const POST_CATEGORY = (category) => {
  return async (dispatch) => {
    dispatch({ type: 'CATEGORY_UPLOAD_START' });
    try {
      const response = await axios.post("/api/v1/createCategory", category, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response) {
        console.log('done')
        dispatch(GET_CATEGORY());
        toast(`${response.data.message}`);
      }
    } catch (err) {
      toast.error(`Error: ${err.response.data.message}`);
      console.log(`Error: ${err.response.data.message}`);
      console.log(err);
      return false;
    }finally {
      dispatch({ type: 'CATEGORY_UPLOAD_END' });
    }
  };
};

export const   DELETE_CATEGORY = (id) => {
  return async (dispatch) => {
    const response = await axios.delete(`/api/v1/DeleteCategory?id=${id}`);
    if (response) {
      dispatch(GET_CATEGORY());
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
