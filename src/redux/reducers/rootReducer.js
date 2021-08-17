import { combineReducers } from "redux";
import loggedReducer from "./isLogged";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import currentPostReducer  from "./currentPostReducer";
import fetchPostReducer from "./fetchPostReducer";


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['currentPost', 'isLogged', 'fetchPosts']
}


const rootReducer = combineReducers({

    fetchPosts: fetchPostReducer,
    isLogged: loggedReducer,
    currentPost: currentPostReducer,
});

export default persistReducer(persistConfig,rootReducer);