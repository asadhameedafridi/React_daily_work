import React from "react";
import ReactDOM from "react-dom";

//import App from "./components/App"; // this is for sample google auth
import App from "./auth-redux-components/App"; // this is for google auth with redux
ReactDOM.render(<App />, document.querySelector("#root"));
