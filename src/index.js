import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AntFormDisplay from "./Form/AntFormDisplay";
import formArray from "./Form/config/formArray.json";

ReactDOM.render(
  <>
    {/* <AntFormDisplay
      formid="5ea0e1a12c3b2808b4da0826"
      showedit={true}
    /> */}
    <AntFormDisplay showedit={true} formArray={formArray} />
  </>,
  document.getElementById("root")
);
