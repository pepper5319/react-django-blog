import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Form from "./Form";
const App = () => (
  <div>
    <DataProvider endpoint="blog/posts/" />
  </div>
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
