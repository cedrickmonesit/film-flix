import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
//Import applyMiddleware to wire up thunk

import thunk from "redux-thunk"; //Import thunk

import App from "./components/App";
import reducers from "./reducers";

//redux store
const store = createStore(reducers, applyMiddleware(thunk));

//Wire up Provider to App to gain access to redux store with connect function
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root"),
);
