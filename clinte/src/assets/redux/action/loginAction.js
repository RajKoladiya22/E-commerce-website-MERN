import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const REGISTER_USER = async (data) => {
  try {
    const response = await axios.post("/api/v1/register", data);
    if (response.status === 201) {
      toast("User Registered Successfully");
      console.log("User Registered Successfully", response.data);
    } else {
      toast("Registration Failed");
      console.log("Registration Failed");
    }
  } catch (err) {
    toast(`Error: ${err.message}`);
    console.error("Error:", err.message);
    return false;
  }
};

export const LOGIN_USER = (data, navigate) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/api/v1/login", data);
      
    

      if (response.status === 201) {
        localStorage.setItem('token',  JSON.stringify(response.data.token));
        navigate('/home');
      } else {
        toast("Login Failed");
      }
    } catch (err) {
      toast(`Error: ${err.message}`);
      console.error("Error:", err.message);
      return false;
    }
  };
};
