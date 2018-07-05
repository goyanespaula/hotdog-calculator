import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  updateCalculations: PropTypes.func.isRequired
};

class PartyHotDogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sausagesPerPkg: "",
      bunsPerPkg: "",
      numGuests: "",
      dogsPerGuest: ""
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
        <label htmlFor="numGuests">Number of People to Feed:</label>
        <input
          type="number"
          name="numGuests"
          id="numGuests"
          onChange={this.handleChange}
        />
        <div>guests</div>
        <label htmlFor="dogsPerGuest">Number of Hot Dogs per Guest:</label>
        <input
          type="number"
          name="dogsPerGuest"
          id="dogsPerGuest"
          onChange={this.handleChange}
        />
        <div>guests</div>
        <input type="submit" />
      </form>
    );
  }
}

PartyHotDogForm.propTypes = propTypes;

export default PartyHotDogForm;
