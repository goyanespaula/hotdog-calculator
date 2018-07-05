// libraries
import React, { Component } from "react";

// src
import "./App.css";
import HotDogForm from "./containers/HotDogForm";
import HotDogCalculationResults from "./containers/HotDogCalculationResults";
import calculateHotDogs from "./helpers/hotDogCalculations";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numSausagePkgs: "",
      numBunPkgs: "",
      numHotDogs: "",
      altNumSausagePkgs: "",
      altNumBunPkgs: "",
      altNumHotDogs: ""
    };
    this.updateCalculations = this.updateCalculations.bind(this);
  }

  updateCalculations({ sausagesPerPkg, bunsPerPkg, numGuests, dogsPerGuest }) {
    var newState = calculateHotDogs(
      +sausagesPerPkg,
      +bunsPerPkg,
      +numGuests,
      +dogsPerGuest
    );
    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <HotDogForm updateCalculations={this.updateCalculations} />
        <HotDogCalculationResults
          numSausagePkgs={this.state.numSausagePkgs}
          numBunPkgs={this.state.numBunPkgs}
          numHotDogs={this.state.numHotDogs}
          altNumSausagePkgs={this.state.altNumSausagePkgs}
          altNumBunPkgs={this.state.altNumBunPkgs}
          altNumHotDogs={this.state.altNumHotDogs}
        />
      </div>
    );
  }
}

export default App;
