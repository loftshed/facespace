import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { FaceProvider } from "./components/FaceContext";

ReactDOM.render(
  <React.StrictMode>
    <FaceProvider>
      <App />
    </FaceProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
