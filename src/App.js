import React, { Component } from "react";
import "./App.css";
import calculateHotDogs from "./helpers/hotDogCalculations";
import HotDogForm from "./containers/HotDogForm";
import HotDogCalculations from "./containers/HotDogCalculations";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numSausagePkgs: "",
      numBunPkgs: "",
      numHotDogs: ""
    };
    this.updateCalculations = this.updateCalculations.bind(this);
  }

  updateCalculations({ sausagesPerPackage, bunsPerPackage }) {
    var { numSausagePkgs, numBunPkgs, numHotDogs } = calculateHotDogs(
      +sausagesPerPackage,
      +bunsPerPackage
    );
    this.setState({ numSausagePkgs, numBunPkgs, numHotDogs });
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
          sausagePackages={this.state.numSausagePkgs}
          bunPackages={this.state.numBunPkgs}
          hotDogs={this.state.numHotDogs}
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
