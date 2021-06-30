import {combineReducers} from "redux";
import loggedReducer from "./isLogged";
import {firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";
import  fetchDataReducer  from '../reducers/fetchDataReducer';



export const rootReducer = combineReducers({

    data: fetchDataReducer,
    isLogged1: loggedReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
});

export default rootReducer;