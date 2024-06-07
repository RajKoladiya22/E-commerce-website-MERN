const initialState = {
    category: [],
  };
  
  export const categoryReducer = (state = initialState, action) => {
    
    switch (action.type) {
      case "GET_CATEGORY_SUCCESS":
        return {
          ...state,
          category: action.payload.category,
        };
  
      default:
        return state;
    }
  };
  