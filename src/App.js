import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/header";
import Courselist from "./components/courselist/courselist";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Courselist /> */}
      </div>
    );
  }
}

export default App;
