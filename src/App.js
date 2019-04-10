import React, { Component } from "react";
import "./App.css";
import Header from "./layouts/Header";
import Carousel from "./components/user/carousel/Carousel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Carousel />
      </div>
    );
  }
}

export default App;
