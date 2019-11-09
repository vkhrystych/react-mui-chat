import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

import "./index.css";
import App from "./App";

import * as serviceWorker from "./serviceWorker";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Arial"
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": "Arial"
      }
    }
  }
});

const Application = () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

ReactDOM.render(<Application />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
