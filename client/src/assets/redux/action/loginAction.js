import  axios  from "../../utils/axiosConfig";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const REGISTER_USER = async (data, navigate) => {
  try {
    const response = await axios.post("/api/v1/register", data);
    if (response.status === 201) {
      toast("User Registered Successfully");
      // navigate('/')
      console.log("User Registered Successfully", response.data);
    } else {
      toast("Registration Failed");
      console.log("Registration Failed");
    }
  } catch (err) {
    toast(`Error: ${err.response.data.message}`);
    return false;
  }
};

export const LOGIN_USER = (data, navigate) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/api/v1/login", data);
      

      if (response.status === 201) {
        const { token } = response.data.data; 

        // Save token and role in localStorage
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("user", JSON.stringify(response.data.data));
        dispatch({
          type: "LOGIN_USER",
          payload: token,

        });
        if(response.data.data.role == 'admin'){
          navigate('/admin');
          
        }else{
          navigate("/");
          
        }

      } else {
        toast(`Login Failed`);
        toast("Login Failed");
      }
    } catch (err) {
      toast(`Error: ${err.response.data.message}`);
      return false;
    }
  };
};


export const LOGOUT_USER = () => {
  return async (dispatch) => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
    window.location.reload();
  };
};
