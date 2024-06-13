const initialState = {
  category: [],
  isLoading: false,
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CATEGORY_SUCCESS":
      return {
        ...state,
        category: action.payload.category,
      };
    case "CATEGORY_UPLOAD_START":
      return {
        ...state,
        isLoading: true,
      };
    case "CATEGORY_UPLOAD_END":
      return {
        ...state,
        isLoading: false,
      };
   

    default:
      return state;
  }
};
