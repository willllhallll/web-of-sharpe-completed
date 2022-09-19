import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/**
 * Bind react to the real DOM tree.
 */
const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * Render the application!
 */
root.render(<App />);
