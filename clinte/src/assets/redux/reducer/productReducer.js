const initialState = {
  product: [],
};

export const productReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case "GET_PRODUCT_SUCCESS":
      return {
        ...state,
        product: action.payload,
      };

    default:
      return state;
  }
};
