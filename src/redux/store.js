import {createStore, compose, applyMiddleware} from 'redux'
import 'firebase/firestore'
import { rootReducer } from './reducers/rootReducer'
import firebase from "firebase/app";
import {createFirestoreInstance, reduxFirestore} from "redux-firestore";

const createStoreWithFirebase = compose(
    reduxFirestore(firebase), // firebase instance as first argument, rfConfig as optional second
)(createStore);


const initialState = {};
const store = createStoreWithFirebase(rootReducer, initialState)


/*
const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
*/


export default store;