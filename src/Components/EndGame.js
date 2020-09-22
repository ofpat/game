import React from "react";

class EndGame extends React.Component {
  handleClick = () => {
    this.props.newGame(false);
  };
  render() {
    return (
      <div className="end-game">
        <div className="message">
          <button className="btn btn-primary" onClick={this.handleClick}>
            Go Again
          </button>
        </div>
      </div>
    );
  }
}

export default EndGame;
