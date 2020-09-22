import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar mb-2">
        <div className="game-title">{this.props.title}</div>
        <div className="right-score">{this.props.currentScore}/{this.props.maxScore}</div>
      </div>
    );
  }

  componentDidUpdate(){
    console.log('asdf');
  }
}

export default Navbar;
