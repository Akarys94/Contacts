import React, { Component } from "react";
import Contacts from "../components/Contacts";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTable: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      isTable: !this.state.isTable,
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isTable ? "table" : "plate"}
        </button>
        {this.state.isTable ? <Contacts /> : "Fule"}
      </div>
    );
  }
}

export default Page;
