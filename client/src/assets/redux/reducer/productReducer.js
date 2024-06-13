// const initialState = {
//   product: [],
// };

// export const productReducer = (state = initialState, action) => {
  
//   switch (action.type) {
//     case "GET_PRODUCT_SUCCESS":
//       return {
//         ...state,
//         product: action.payload,
//       };

//     default:
//       return state;
//   }
// };


const initialState = {
  product: [],
  isLoading: false
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCT_UPLOAD_START':
      return {
        ...state,
        isLoading: true,
      };
    case 'PRODUCT_UPLOAD_END':
      return {
        ...state,
        isLoading: false,
      };
    case 'GET_PRODUCT_SUCCESS':
      return {
        ...state,
        product: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};


