import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId="B5aql312YfBMhshMJWdKJzOhWn8pS1Nxj3EEei5Tv8l8VeerL19NLOGtMoPorXUG">
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);