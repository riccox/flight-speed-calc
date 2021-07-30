import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";


import { IntlProvider } from "rsuite";
import zhCN from "rsuite/lib/IntlProvider/locales/zh_CN";


ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={zhCN}>
      <App />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
