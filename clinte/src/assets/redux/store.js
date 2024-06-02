// import { applyMiddleware, createStore } from "redux";
// import { rootReducer } from "./reducer";
// import { thunk } from "redux-thunk";


// export const store = createStore( rootReducer, applyMiddleware(thunk))

import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducer";
import {thunk} from "redux-thunk"; // Named import

export const store = createStore(rootReducer, applyMiddleware(thunk));


