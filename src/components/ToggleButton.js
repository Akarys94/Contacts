import React, { Component } from "react";

class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTable: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isTable ? "table" : "plate"}{" "}
      </button>
    );
  }
}
export default ToggleButton;
