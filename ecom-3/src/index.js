import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "bootstrap/dist/css/bootstrap.css";

import { Provider } from "react-redux";
import { createStore } from "redux";
import cartReducer from "component/reducers/CartReducer";

const store = createStore(cartReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
