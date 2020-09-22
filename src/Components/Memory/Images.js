import React from "react";
import { images } from "./Images/index";
import BG from "./Images/bg.jpg";
import Navbar from "../Navbar";

class Images extends React.Component {
  characters = [];
  constructor(props){
    super(props);
  this.state = {
    score: 0,
    loaded: false
  }
}

  handleClick = (event) => {
    let character = event.currentTarget;
    let obj = this;
    if (character.getAttribute("check") === "found" || character.getAttribute("check") === "true") {
      return;
    }

    if (character !== this.characters[0]) {
      this.switch(character);
      this.characters.push(character);
    } else {
      this.switch(character);
      this.characters = [];
    }

    if (this.characters.length === 2) {
      if (!this.checkName(this.characters[0], this.characters[1])) {


        setTimeout(function(){
          obj.switch(obj.characters[0]);
          obj.switch(obj.characters[1]);
          obj.characters.shift();
          obj.characters.shift();
        ; }, 800);
      } else {
        this.setState({score: this.state.score + 1});
        this.characters.shift();
        this.characters.shift();
      }
    }
    let allPictures = document.getElementsByClassName("image-blank");
    if (allPictures.length < 1) {
      setTimeout(function(){
      obj.props.game(obj.props.game);
      let reset = document.getElementsByClassName("image");
      for (let i = 0; i < reset.length; i++) {
        reset[i].classList.add("image-blank");
        reset[i].setAttribute("check", "false");
        this.characters = [];
      }
    },1000)
    }
  };

  checkName = (character1, character2) => {
    if (character1.getAttribute("name") === character2.getAttribute("name")) {
      character1.setAttribute("check", "found");
      character2.setAttribute("check", "found");
      return true;
    }
    return false;
  };

  switch = (target) => {
    if (target.getAttribute("check") === "true") {
      target.setAttribute("check", "false");
      target.classList.add("image-blank");
    } else {
      target.setAttribute("check", "true");
      target.classList.remove("image-blank");
    }
  };
  render() {
    if(typeof this.state.images === 'object'){
    return (
      <div className="images">
      <Navbar title="Play some memory!" currentScore={this.state.score} maxScore={images.length / 2}/>
      <div className="image-wrapper">
        {this.state.images
          .map((element) => {
            return (
              <div
                className="image image-blank"
                name={element.name}
                check="false"
                onClick={this.handleClick}
              >
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img alt="" src={element.pic} />
                </div>
                <div className="flip-card-back">
                  <img alt="" src={BG} />
                </div>
              </div>
              </div>
            );
          })}
      </div></div>
    );
  }
  else {
    return (
      <div></div>
    )
  }
  }

  componentDidMount() {
    setTimeout(function(){
      document.querySelectorAll('.image-wrapper').forEach(function(a){
        console.log(a);
        a.classList.add('active-wrapper')
      })
    }, 1000);
    let randomItem = images.sort(() => Math.random() - 0.5);
    this.setState({images:randomItem, loaded: true});
  }
}
export default Images;
