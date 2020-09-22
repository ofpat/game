import React from "react";

class Solution extends React.Component {

  constructor(props){
    super(props);
  this.state = {
  }
}

 createPlaceholder = () => {
   let placeholder = [];
   for (let i = 0; i < this.props.answer.length; i++) {
       placeholder.push(<div className="selected-solution mt-5"><span>{this.props.selected[i]}</span></div>);
   }
   return placeholder;
 }

  render() {
    return (<div className="row"><div className="col mt-2"><div className="solution-wrapper">
    {this.createPlaceholder()}
    </div></div></div>)
  }

}

export default Solution;
