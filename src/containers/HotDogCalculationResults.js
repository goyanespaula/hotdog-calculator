import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  numSausagePkgs: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  numBunPkgs: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  numHotDogs: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  altNumSausagePkgs: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  altNumBunPkgs: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  altNumHotDogs: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired
};

class HotDogCalculationResults extends Component {
  render() {
    const {
      numSausagePkgs,
      numBunPkgs,
      numHotDogs,
      altNumSausagePkgs,
      altNumBunPkgs,
      altNumHotDogs
    } = this.props;
    const difference = numHotDogs - altNumHotDogs;
    const displayAlternative = difference > 0;
    let people = difference > 1 ? "people" : "person";
    let sausagePlural = altNumSausagePkgs > 1 ? "s" : "";
    let bunPlural = altNumBunPkgs > 1 ? "s" : "";
    let alternative;

    if (displayAlternative) {
      alternative = (
        <div>
          *or, if {difference} {people} ate 1 fewer hot dog, you could buy{" "}
          {altNumSausagePkgs} sausage package{sausagePlural} and {altNumBunPkgs}{" "}
          bun package{bunPlural} for a total of {altNumHotDogs} hot dogs
        </div>
      );
    } else {
      alternative = "";
    }

    return (
      <div>
        <br />
        <div>Total Number of Sausage Pkgs: {numSausagePkgs}</div>
        <div>Total Number of Bun Pkgs: {numBunPkgs}</div>
        <div>Total Number of Hot Dogs: {numHotDogs}</div>
        {alternative}
      </div>
    );
  }
}

HotDogCalculationResults.propTypes = propTypes;

export default HotDogCalculationResults;
