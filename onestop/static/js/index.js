import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index.js";
import Navbar from "./navbar.js";
import Body from "./body.js";

ReactDOM.render(
  <Provider store={store}>
    <Fragment>
      <Navbar />
    </Fragment>
  </Provider>,
  document.getElementById("side-menu")
);
ReactDOM.render(
  <Provider store={store}>
    <Body />
  </Provider>,
  document.getElementById("page-wrapper")
);
