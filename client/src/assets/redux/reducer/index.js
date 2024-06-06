import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { productReducer } from "./productReducer";


export const rootReducer = combineReducers({
    data : loginReducer,
    product : productReducer
})
