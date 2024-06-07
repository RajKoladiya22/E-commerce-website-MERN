import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { productReducer } from "./productReducer";
import { categoryReducer } from "./categoryReducer";


export const rootReducer = combineReducers({
    data : loginReducer,
    product : productReducer,
    category : categoryReducer,
})
