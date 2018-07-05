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
      numHotDogs: ""
    };
    this.updateCalculations = this.updateCalculations.bind(this);
  }

  updateCalculations({ sausagesPerPkg, bunsPerPkg, numGuests, dogsPerGuest }) {
    var { numSausagePkgs, numBunPkgs, numHotDogs } = calculateHotDogs(
      +sausagesPerPkg,
      +bunsPerPkg,
      +numGuests,
      +dogsPerGuest
    );
    this.setState({ numSausagePkgs, numBunPkgs, numHotDogs });
  }

  render() {
    return (
      <div className="App">
        <HotDogForm updateCalculations={this.updateCalculations} />
        <HotDogCalculationResults
          sausagePkgs={this.state.numSausagePkgs}
          bunPkgs={this.state.numBunPkgs}
          hotDogs={this.state.numHotDogs}
        />
      </div>
    );
  }
}

export default App;
