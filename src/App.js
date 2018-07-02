import React, { Component } from "react";
import "./App.css";
import calculateHotDogs from "./helpers/calculateHotDogs";
import HotDogForm from "./containers/HotDogForm";
import HotDogCalculations from "./containers/HotDogCalculations";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sausagePackages: "",
      bunPackages: "",
      hotDogs: ""
    };
    this.updateCalculations = this.updateCalculations.bind(this);
  }

  updateCalculations({ sausagesPerPackage, bunsPerPackage }) {
    var { bunPackages, sausagePackages, hotDogs } = calculateHotDogs(
      sausagesPerPackage,
      bunsPerPackage
    );
    this.setState({ bunPackages, sausagePackages, hotDogs });
  }

  render() {
    return (
      <div className="App">
        <div>
          What's the min number of sausages and buns you must buy to have a 1:1
          ratio of hot dogs and sausages?
        </div>
        <HotDogForm updateCalculations={this.updateCalculations} />
        <HotDogCalculations
          sausagePackages={this.state.sausagePackages}
          bunPackages={this.state.bunPackages}
          hotDogs={this.state.hotDogs}
        />
      </div>
    );
  }
}

// buns/package?
// dogs/package?

// optional: min number of hot dogs
// optional: min number of people to feed
// optional: number of dogs/person
// optional: optimize for less money spent

export default App;
