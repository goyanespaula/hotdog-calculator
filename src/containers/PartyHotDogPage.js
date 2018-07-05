// libraries
import React, { Component } from "react";
import { Link } from "react-router-dom";

// src
import PartyHotDogForm from "./PartyHotDogForm";
import HotDogCalculationResults from "./HotDogCalculationResults";
import calculateHotDogs from "../helpers/hotDogCalculations";

class PartyHotDogPage extends Component {
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
      <section>
        <div>
          What's the min number of sausages and buns you must buy to have a 1:1
          ratio of hot dogs and sausages?
        </div>
        <PartyHotDogForm updateCalculations={this.updateCalculations} />
        <HotDogCalculationResults
          sausagePkgs={this.state.numSausagePkgs}
          bunPkgs={this.state.numBunPkgs}
          hotDogs={this.state.numHotDogs}
        />
        <Link to="/">Calculating for one person?</Link>
      </section>
    );
  }
}

export default PartyHotDogPage;
