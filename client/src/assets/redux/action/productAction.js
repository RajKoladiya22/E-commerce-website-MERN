import  axios  from "../../utils/axiosConfig";
import { toast } from "react-toastify";

export const GET_PRODUCT = () => {
    
  return async (dispatch) => {
    try {
        const response = await axios.get('/api/v1/Products');
        
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
