import {createStore, } from 'redux'
import 'firebase/firestore'
import { rootReducer } from './reducers/rootReducer'




const initialState = {};
const store = createStore(rootReducer, initialState)


/*
const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
*/


export default store;