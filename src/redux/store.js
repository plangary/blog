import {applyMiddleware, createStore} from 'redux'
import  rootReducer  from './reducers/rootReducer'
import persistStore from "redux-persist/es/persistStore";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

const middleWare = [thunk];
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWare)))


export const persistor = persistStore(store)


export default { store, persistor } ;
