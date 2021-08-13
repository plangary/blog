import {combineReducers} from "redux";
import loggedReducer from "./isLogged";

import currentPostReducer  from "./currentPostReducer";
import fetchPostReducer from "./fetchPostReducer";


export const rootReducer = combineReducers({

    fetchPosts: fetchPostReducer,
    isLogged: loggedReducer,
    currentPost: currentPostReducer,
});

export default rootReducer;