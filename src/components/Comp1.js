import React, { Component } from "react";
import Drawer from '@material-ui/core/Drawer';
class Comp1 extends Component {
  state = {
  };

  render() {
    return (
      <React.Fragment>
          <Drawer></Drawer>
          <h1>This is Component 1</h1>
      </React.Fragment>
    );
  }
}

export default Comp1;
