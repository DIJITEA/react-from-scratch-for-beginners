import React from "react";
import Header from "./components/header/Header";
import MainArticle from "./components/mainArticle/MainArticle";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header title={"Users List"} />
        <MainArticle />
      </div>
    );
  }
}
export default App;
