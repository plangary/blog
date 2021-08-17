import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import  { store, persistor } from "./redux/store"



//const middleWare = [thunk];
//const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWare)))


ReactDOM.render(

  <React.StrictMode>
      <Provider store={store}>
          <PersistGate persistor={persistor}>
              <App />
          </PersistGate>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

