import React, { Component } from "react";
import PropTypes from "prop-types";

class HotDogCalculations extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <br />
        <div>
          Total Number of Sausage Packages: {this.props.sausagePackages}
        </div>
        <div>Total Number of Bun Packages: {this.props.bunPackages}</div>
        <div>Total Number of Hot Dogs: {this.props.hotDogs}</div>
      </div>
    );
  }
}

export default HotDogCalculations;
