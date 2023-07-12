import React from "react";

class MainArticle extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      helpText:"Help text",
      userData: "no Data"
    }
    this.inputClick = this.inputClick.bind(this)
  }
  componentDidUpdate(prevProp){
    if (this.state.helpText !== "Help")
      console.log("Some")
  }
  render() {
    return (
      <article>
        <h1>{this.state.helpText}</h1>
        <h2>{this.state.userData}</h2>
        <input
          placeholder={this.state.helpText}
          onChange={event => this.setState({userData: event.target.value})}
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
