import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { reducer } from "./reducers/index"

const store = createStore(reducer);





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>

    <React.StrictMode>
      <Router>
        <App />
      </Router>

    </React.StrictMode>

  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

