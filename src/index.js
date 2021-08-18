import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AntFormDisplay from "./Form/AntFormDisplay";
import formArray from "./Form/config/formArray.json";

ReactDOM.render(
  <>
    {/* <AntFormDisplay
      formid="5f7be94d85cd1730c8544018"
      showedit={true}
    /> */}
    <AntFormDisplay showedit={true} formArray={formArray} />
  </>,
  document.getElementById("root")
);
