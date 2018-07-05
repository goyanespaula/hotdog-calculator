// libraries
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// src
import "./App.css";
import HotDogForm from "./PartyHotDogForm";
import HotDogCalculationResults from "./HotDogCalculationResults";
import calculateHotDogs from "../helpers/hotDogCalculations";
import PartyHotDogPage from "./containers/PartyHotDogPage";

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
        <PartyHotDogForm updateCalculations={this.updateCalculations} />
        <HotDogCalculationResults
          sausagePkgs={this.state.numSausagePkgs}
          bunPkgs={this.state.numBunPkgs}
          hotDogs={this.state.numHotDogs}
        />
        <Route path="/party" component={PartyHotDogPage} />
        <Redirect to="/" />
      </div>
    );
  }
}

export default App;
