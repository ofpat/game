import React from "react";
import Images from "./Images";

class Memory extends React.Component {
  render() {
    return (
      <div className="memory">
        <Images game={this.props.game} />
      </div>
    );
  }
}

export default Memory;
