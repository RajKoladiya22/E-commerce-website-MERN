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

export const POST_CATEGORY = (product) => {
  console.log(product);
  return async (dispatch) => {
    try {
      const response = await axios.post("/api/v1/addProduct", product, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response) {
        console.log("doneeeeeeeeeeeee");
        toast(`${response.data.message}`);
      } else {
        console.log("not done");
      }
    } catch (err) {
      toast.error(`Error: ${err.response.data.message}`);
      console.log(`Error: ${err.response.data.message}`);
      console.log(err);
      return false;
    }
  };
};
