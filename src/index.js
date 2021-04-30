import React from "react";
import ReactDOM from "react-dom";
import Main from "./containers/Main"

import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";

import reportWebVitals from "./utils/reportWebVitals";

import configureStore from "./configureStore";
import { theme } from "./theme";

// Create redux store with history
const initialState = {};
const store = configureStore(initialState);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Main />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
