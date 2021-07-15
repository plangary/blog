import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import {ReactReduxFirebaseProvider} from "react-redux-firebase";
import firebase from "firebase";
import {createFirestoreInstance} from "redux-firestore";
import {createStore} from "redux";
import rootReducer from "./redux/reducers/rootReducer";

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}
const initialState = {}
const store = createStore(rootReducer, initialState)

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
}


ReactDOM.render(

  <React.StrictMode>
      <Provider store={store}>
          <ReactReduxFirebaseProvider {...rrfProps}>
              <App />
          </ReactReduxFirebaseProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

