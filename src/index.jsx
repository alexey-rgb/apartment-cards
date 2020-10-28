import React from "react";
import { render } from "react-dom";
import { Data } from "./components/Data";

const Index = () => {
  return <Data />;
};

render(<Index />, document.getElementById("app"));
