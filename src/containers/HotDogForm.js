import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  updateCalculations: PropTypes.func.isRequired
  // history: PropTypes.object.isRequired
};

class HotDogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sausagesPerPackage: "",
      bunsPerPackage: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateCalculations(this.state);
  }

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <label htmlFor="sausagesPerPackage">
          Number of Sausages in Package:
        </label>
        <input
          type="number"
          name="sausagesPerPackage"
          id="sausagesPerPackage"
          onChange={this.handleChange}
        />
        <div>sausages/package</div>
        <label htmlFor="bunsPerPackage">Number of Buns in Package:</label>
        <input
          type="number"
          name="bunsPerPackage"
          id="bunsPerPackage"
          onChange={this.handleChange}
        />
        <div>buns/package</div>
        <input type="submit" />
      </form>
    );
  }
}

HotDogForm.propTypes = propTypes;

export default HotDogForm;
