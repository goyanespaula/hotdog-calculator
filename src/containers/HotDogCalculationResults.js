import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  sausagePkgs: PropTypes.string.isRequired,
  bunPkgs: PropTypes.string.isRequired,
  hotDogs: PropTypes.string.isRequired
};

class HotDogCalculationResults extends Component {
  render() {
    return (
      <div>
        <br />
        <div>Total Number of Sausage Pkgs: {this.props.sausagePkgs}</div>
        <div>Total Number of Bun Pkgs: {this.props.bunPkgs}</div>
        <div>Total Number of Hot Dogs: {this.props.hotDogs}</div>
      </div>
    );
  }
}

HotDogCalculationResults.propTypes = propTypes;

export default HotDogCalculationResults;
