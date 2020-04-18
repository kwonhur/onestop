import React from "react";
import ReactDOM from "react-dom";
import Profile from "./profile";
import Dashboards from "./dashboards";
import "./counter";

ReactDOM.render(<Profile />, document.getElementById("profile"));
ReactDOM.render(<Dashboards />, document.getElementById("dashboards"));
