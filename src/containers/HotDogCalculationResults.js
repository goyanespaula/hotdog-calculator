import React, { Component } from "react";
import PropTypes from "prop-types";

class HotDogCalculationResults extends Component {
  constructor(props) {
    super(props);
  }
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

export default HotDogCalculationResults;
