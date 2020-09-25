import React from "react";
import { data } from "./Data/index";
import Navbar from "../Navbar";
import Solution from "./Solution";


class Common extends React.Component {

  constructor(props){
    super(props);
  this.state = {
    question: '',
    data : [],
    newQuestion: false
  }
  this.score = 0;
  this.maxscore = 4;
}

  handleClick = (event) => {
    let obj = this;
    let letterWrapper = event.currentTarget;
    if (letterWrapper.getAttribute("clicked") === "true") {
      return;
    }

    letterWrapper.classList.add('clicked');
    letterWrapper.setAttribute("clicked", true);
    document.getElementById("retry").classList.add('active');
    let letter = letterWrapper.getAttribute("letter");
    let selectedArr = [];
    let added = false;
    let space = false;
    this.state.selected.map((element) => {
      if(element){
        selectedArr.push(element);
      }
      else if(!added){
        selectedArr.push(letter);
        added = true;
      }
      else {
        selectedArr.push('');
        space = true;
      }
    })
    this.setState({selected:selectedArr});
    if(!space){
      let checkstring = selectedArr.join('');
      if(checkstring === this.state.question.word){
        this.score = this.score + 1;
        document.getElementById("correct").classList.add('active');
        if(this.score < this.maxscore){
          setTimeout(function(){
            obj.setState({newQuestion: true});
          },1500);
        }
        else {
          this.props.game(this.props.game);
        }

      } else {
        document.getElementById("error").classList.add('active');
      }
    }

  }

  handleRetry = (event) => {
    document.querySelectorAll('.clicked').forEach(function(a){
      a.classList.remove('clicked')
      a.setAttribute('clicked', false)
    })
    document.getElementById("correct").classList.remove('active');
    document.getElementById("error").classList.remove('active');
    document.getElementById("retry").classList.remove('active');
    let selectedArr = [];
    for (let i = 0; i < this.state.question.word.length; i++) {
       selectedArr.push('');
    }
    this.setState({selected:selectedArr});
  }

  render() {

    let symbol = ['a', 'b', 'c', 'd'];
    let i = 0;
    if(typeof this.state.question === 'object'){
    return (
      <div className="common container-fluid">
      <div className=""><Navbar title="Finde den gemeinsamen Begriff!" currentScore={this.score} maxScore={this.maxscore}/></div>
      <div className="question text-center">
      {
        this.state.question.images
        .map((element) => {
          return (
            <img alt="" src={element}/>
          )
        })
      }
      </div>
      <Solution answer={this.state.question.word} selected={this.state.selected} />

      <div className="end-wrapper text-center">
        <span className="correct" id="correct"><small>Correct!</small></span>
        <span className="error" id="error"><small>Incorrect, try again!</small></span>
      </div>
      <div className="row"><div className="col-12"><div className="letter-box">
      {
        this.state.question.letters

        .map((element) => {
          return (
            <div className="letter"
            onClick={this.handleClick}
            letter={element}
            >{element}</div>
          )
        })
      }
      </div></div>
<span className="retry" id="retry" onClick={this.handleRetry}>retry</span>
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
      document.querySelectorAll('.clicked').forEach(function(a){
        a.classList.remove('clicked')
        a.setAttribute('clicked', false)
      })
      document.getElementById("retry").classList.remove('active');
      document.getElementById("correct").classList.remove('active');
      document.getElementById("error").classList.remove('active');
      let randomNumber = Math.floor(Math.random()*this.state.data.length);
      let randomItem = this.state.data[randomNumber];
      let letters = '';
      let length = 18 - randomItem.word.length;
      var characters = 'abcdefghijklmnopqrstuvwxyz';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        letters += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
       this.state.data.splice(randomNumber, 1);
       randomItem.letters = letters + randomItem.word;
       randomItem.letters = randomItem.letters.split('').sort(() => Math.random() - 0.5);
       let selectedArr = [];
       for (let i = 0; i < randomItem.word.length; i++) {
          selectedArr.push('');
       }
       this.setState({question:randomItem, data:this.state.data,newQuestion:false, selected:selectedArr});
    }
  }

  componentDidMount() {
    let randomNumber = Math.floor(Math.random()*data.length);
    let randomItem = data[randomNumber];
    let letters = '';
    let length = 18 - randomItem.word.length;
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      letters += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    data.splice(randomNumber, 1);
    randomItem.letters = letters + randomItem.word;
    randomItem.letters = randomItem.letters.split('').sort(() => Math.random() - 0.5);
    let selectedArr = [];
    for (let i = 0; i < randomItem.word.length; i++) {
       selectedArr.push('');
    }
    this.setState({question:randomItem, data:data,selected:selectedArr});
  }
}



export default Common;
