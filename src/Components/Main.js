import React from "react";
import Login from "./Login";
import EndGame from "./EndGame";
import Memory from "./Memory/Memory";
import Questions from "./Questions/Questions";
import Common from "./Common/Common";

class Main extends React.Component {
  state = {
    showLogin: true,
    showGame: 0,
    name: "",
    score: 0,
  };

  updateGame = (value) => {
    this.setState({showGame : this.state.showGame + 1});
  }

  handleLogin = (name, boolean) => {
    this.setState({ name: name, showLogin: boolean });
  };

  handleEndGame = (boolean) => {
    if (boolean) {
      this.setState({ showEndGame: boolean, score: this.state.score + 1 });
    } else {
      this.setState({ showEndGame: boolean });
    }
  };
  render() {
    const { showGame, name, score } = this.state;
    return (
      <div className="main-wrapper">
        <div className="bg"></div>
        <div className="main">
        {showGame === 0 ? <Login game={this.updateGame} /> : null}
        {showGame === 1 ? <Memory game={this.updateGame} /> : null}
        {showGame === 3 ? <Questions game={this.updateGame} /> : null}
        {showGame === 2 ? <Common game={this.updateGame} /> : null}
        {showGame === 4 ? <EndGame newgame={this.handleEndGame} /> : null}
      </div>
      </div>
    );
  }
}

export default Main;
