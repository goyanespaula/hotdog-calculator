// libraries
import React, { Component } from "react";
import { Link } from "react-router-dom";

// src
import HotDogForm from "./HotDogForm";
import HotDogCalculationResults from "./HotDogCalculationResults";
import calculateHotDogs from "../helpers/hotDogCalculations";

class HotDogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numSausagePkgs: "",
      numBunPkgs: "",
      numHotDogs: ""
    };
    this.updateCalculations = this.updateCalculations.bind(this);
  }

  updateCalculations({ sausagesPerPkg, bunsPerPkg }) {
    var { numSausagePkgs, numBunPkgs, numHotDogs } = calculateHotDogs(
      +sausagesPerPkg,
      +bunsPerPkg
    );
    this.setState({ numSausagePkgs, numBunPkgs, numHotDogs });
  }

  render() {
    return (
      <section>
        <div>
          What's the min number of sausages and buns you must buy to have a 1:1
          ratio of hot dogs and sausages?
        </div>
        <HotDogForm updateCalculations={this.updateCalculations} />
        <HotDogCalculationResults
          sausagePkgs={this.state.numSausagePkgs}
          bunPkgs={this.state.numBunPkgs}
          hotDogs={this.state.numHotDogs}
        />
        <Link to="/party">Calculating for a cookout?</Link>
      </section>
    );
  }
}

export default HotDogPage;
