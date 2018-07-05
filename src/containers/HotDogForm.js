import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  updateCalculations: PropTypes.func.isRequired
};

class HotDogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sausagesPerPkg: "",
      bunsPerPkg: ""
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
        <label htmlFor="sausagesPerPkg">Number of Sausages in Pkg:</label>
        <input
          type="number"
          name="sausagesPerPkg"
          id="sausagesPerPkg"
          onChange={this.handleChange}
        />
        <div>sausages/package</div>
        <label htmlFor="bunsPerPkg">Number of Buns in Pkg:</label>
        <input
          type="number"
          name="bunsPerPkg"
          id="bunsPerPkg"
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
