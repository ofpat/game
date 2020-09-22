import React from "react";

class Login extends React.Component {
  state = {};

  handleClick = (e) => {
    e.preventDefault();
    this.props.game(1);
  };
  render() {
    return (
      <div className="wrapper">
        <div className="login text-center">
              <h1>
                Three games to rule them all<br/><small>(.. or atleast some presents)</small>
              </h1>

            <button onClick={this.handleClick} className="btn go-button">
              Let the journey begin
            </button>
        </div>
      </div>
    );
  }

  componentDidMount(){
    setTimeout(function(){
    let el = document.querySelector('.login');
    el.classList.add('loaded');
  }, 2000);
  }
}

export default Login;
