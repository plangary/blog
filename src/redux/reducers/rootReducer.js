import {combineReducers} from "redux";
import loggedReducer from "./isLogged";
import {firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";
import  fetchDataReducer  from '../reducers/fetchDataReducer';
import currentPostReducer  from "./currentPostReducer";


export const rootReducer = combineReducers({

    data: fetchDataReducer,
    isLogged: loggedReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    currentPost: currentPostReducer,
});

export default rootReducer;