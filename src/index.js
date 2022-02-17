import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./fonts.css";

const THEME = createTheme({
  typography: {
    fontFamily: `"Pangolin",cursive`,
    fontWeightLight: 900,
    fontWeightRegular: 900,
    fontWeightMedium: 900,
    fontWeightBold: 900,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
