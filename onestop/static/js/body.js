import { hot } from "react-hot-loader";
import React, { Fragment, Component } from "react";
import Topnav from "./components/topnav.js";
import MainTitle from "./components/maintitle.js";
import Modules from "./components/modules.js";

class Body extends React.Component {
  render() {
    return (
      <Fragment>
        <Topnav />
        <MainTitle />
        <Modules />
      </Fragment>
    );
  }
}
export default hot(module)(Body);
