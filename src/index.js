import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import "./index.css";
import rootReducer from "./redux-modules";
import { composeWithDevTools } from "redux-devtools-extension";
import { CookiesProvider } from "react-cookie";

// Redux Store 정의
const store = createStore(rootReducer, composeWithDevTools());

// redux => Provider / react-cookie => CookiesProvider
ReactDOM.render(
  <Provider store={store}>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </Provider>,
  document.getElementById("root")
);
