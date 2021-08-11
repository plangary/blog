import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import rootReducer from "./redux/reducers/rootReducer";


const initialState = {}
const store = createStore(rootReducer, initialState)


ReactDOM.render(

  <React.StrictMode>
      <Provider store={store}>
              <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

