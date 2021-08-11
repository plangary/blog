import {combineReducers} from "redux";
import loggedReducer from "./isLogged";
import setDataReducer from "./setDataReducer";

import currentPostReducer  from "./currentPostReducer";


export const rootReducer = combineReducers({

    setData: setDataReducer,
    isLogged: loggedReducer,
    currentPost: currentPostReducer,
});

export default rootReducer;