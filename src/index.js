import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AntFormDisplay from "./Form/AntFormDisplay";
import formArray from "./Form/config/formArray.json";

ReactDOM.render(
  <>
    <AntFormDisplay showedit={true} formArray={formArray} />
  </>,
  document.getElementById("root")
);
