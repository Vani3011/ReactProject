import React from "react";
import {Lead} from "./lead"
import { withNavBars } from "./../../HOCs";


class LeadParent extends React.Component {
  render() {
    return <Lead />;
  }
}

export default withNavBars(LeadParent);