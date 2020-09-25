import React from "react";
import { data } from "./Data/index";
import Navbar from "../Navbar";


class Questions extends React.Component {

  constructor(props){
    super(props);
  this.state = {
    question: '',
    data : [],
    newQuestion: false
  }
  this.score = 0;
}

  handleClick = (event) => {
    let obj = this;
    let questionWrapper = event.currentTarget;
    if(questionWrapper.getAttribute("question") === this.state.question.correct_answer){
      questionWrapper.classList.add('right-answer');
      this.score = this.score + 1;
    }
    else
      questionWrapper.classList.add('false-answer');

    setTimeout(function(){
    if(obj.score < 3){
        obj.setState({newQuestion: true});
    }
    else {
      obj.props.game(obj.props.game);
    }
    },1500);
  }

  render() {

    let symbol = ['a', 'b', 'c', 'd'];
    let i = 0;
    if(typeof this.state.question === 'object'){
    return (
      <div className="questions container-fluid">
      <div className=""><Navbar title="Beantworte die schwierigen Fragen!" currentScore={this.score} maxScore="3"/></div>
      <div className="question text-center">
      {this.state.question.question}
      </div>
      <div className="row">
      {
        this.state.question.answers
        .sort(() => Math.random() - 0.5)
        .map((element) => {
          return (
            <div
              className="select-answer col-6 mb-4"
              onClick={this.handleClick}
              question={element}
            ><div className="answer-content">
            {symbol[i++]}.) {element}
            </div></div>
          );
        })}
      </div>
      </div>
    );
  }
  else {
    return <div></div>
  }
  }

  componentDidUpdate() {
    if(this.state.newQuestion){
      document.querySelectorAll('.false-answer').forEach(function(a){
        a.classList.remove('false-answer')
      })
      document.querySelectorAll('.right-answer').forEach(function(a){
        a.classList.remove('right-answer')
      })
      let randomNumber = Math.floor(Math.random()*this.state.data.length);
      let randomItem = this.state.data[randomNumber];
       this.state.data.splice(randomNumber, 1);
       this.setState({question:randomItem, data:this.state.data,newQuestion:false});
    }
  }

  componentDidMount() {
    let randomNumber = Math.floor(Math.random()*data.length);
    let randomItem = data[randomNumber];
    data.splice(randomNumber, 1);
    this.setState({question:randomItem, data:data});
  }
}



export default Questions;
