import React from "react";
import { Test } from './test';
import { withNavBars } from "./../../HOCs";

class TestParent extends React.Component {
  render() {
    return <Test />;
  }
}

export default TestParent;