import React from "react";

class MainArticle extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      helpText:"Help text",
    }
    this.inputClick = this.inputClick.bind(this)
  }
  
  render() {
    return (
      <article>
        <h1>{this.state.helpText}</h1>
        <input
          placeholder={this.state.helpText}
          onClick={this.inputClick}
          onMouseEnter={this.mouseOver}
        />
        <p>{this.state.helpText === "Help text" ? "Yes" : "No"}</p>
      </article>
    );
  }
  inputClick() {
    this.setState ({helpText: "Changed"})
    console.log("Clicked");
  }
  mouseOver() {
    console.log("Mouse Over");
  }
}
export default MainArticle;
