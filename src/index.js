import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./redux/reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import fetchPostReducer from "./redux/reducers/fetchPostReducer";

const middleWare = [thunk];


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWare)))


ReactDOM.render(

  <React.StrictMode>
      <Provider store={store}>
              <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

