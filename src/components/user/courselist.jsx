import React, { Component } from "react";

class courselist extends Component {
  show() {
    console.log("abcxyz");
  }
  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.show}>
          Show
        </button>
      </div>
    );
  }
}

export default courselist;
