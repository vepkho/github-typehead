import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
=======
import './index.css';
>>>>>>> 364170ec3993ce68917be88bf18b3ac256fb38c1
import App from './App';
import { Provider } from "react-redux";
import store from './store'
import {persistGate} from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'

<<<<<<< HEAD
import './index.css';
=======
>>>>>>> 364170ec3993ce68917be88bf18b3ac256fb38c1
let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <persistGate persistor={persistor}>
        <App /> 
      </persistGate>
    </Provider>
  </React.StrictMode>
);



