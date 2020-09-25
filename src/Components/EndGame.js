import React from "react";

class EndGame extends React.Component {
  handleClick = () => {
    this.props.newGame(false);
  };
  render() {
    return (
      <div className="end-game">
        <div className="message text-center">
          <h1 className="mb-5">Gratulation liebe Susi, du hast es geschafft und darfst den Ring behalten!</h1>
          <img src="https://media.giphy.com/media/cirMD2O8QIOj2dlz8e/giphy.gif" />
          <h3 className="text-center mt-5" >Wir wünschen dir und Anton alles alles Liebe zur Hochzeit</h3><br/>
            <h4>deine Gefährten aus dem Marketing<br/>&<br/>der Weise aus der IT</h4>
        </div>
      </div>
    );
  }
}

export default EndGame;
