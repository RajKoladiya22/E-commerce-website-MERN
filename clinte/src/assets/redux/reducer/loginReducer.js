const initialState = {
    user: null,
    error: null,
  };
  
  export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case "REGISTER_USER_SUCCESS":
        return {
          ...state,
          user: action.payload,
        };
      case "REGISTER_USER_FAILURE":
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  