import React from "react";
import Header from "./components/header/Header";
import MainArticle from "./components/mainArticle/MainArticle";


class App extends React.Component {
  render() {
    return <div>
      <Header />
        <h2>App component</h2>
      <MainArticle />
    </div>;
  }
}
export default App
