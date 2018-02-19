import React from "react";
import store from "./store";
import Routes from "./routes";
import { Provider } from "react-redux";

/* Connecting react application to the store using Provider provided by react-redux */
/* Importing our Routes */
export default () =>
  <Provider store={store}>
    <Routes />
  </Provider>;
