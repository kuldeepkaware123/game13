import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./app"; // Import the App component without the ".js" extension

const rootElement = document.getElementById("app");

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
