const initialState = {
    user: null,
    error: null,
    token : localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null
  };
  
  export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN_USER":
        console.log(action.data);
        return {
          ...state,
          token: action.payload,
          user : action.data
        };
      case "LOGOUT" :
        return {
          ...state,
          token: null
        };

     
      default:
        return state;
    }
  };
  