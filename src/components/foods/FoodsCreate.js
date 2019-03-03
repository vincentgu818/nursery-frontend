import React, { Component } from "react";

class FoodsCreate extends Component {
  handleSubmit = (event) => {
    // prevent form from refreshing browser
    event.preventDefault();
    // call createFood function
    this.props.createFood()
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          placeholder="mm/dd/yyyy"
          id="date"
          value={this.props.createFormData.date}
          onChange={(event) => this.props.handleChange(event, "createFormData")}
        />
        <label htmlFor="time">Time</label>
        <input
          type="text"
          placeholder="hh:mm:ss"
          id="time"
          value={this.props.createFormData.time}
          onChange={(event) => this.props.handleChange(event, "createFormData")}
        />
        <button
          type="button"
          onClick={this.props.setCurrentDateTime}
        >
          Current Date and Time
        </button>
        <label htmlFor="food">Food</label>
        <input
          type="text"
          id="food"
          value={this.props.createFormData.food}
          onChange={(event) => this.props.handleChange(event, "createFormData")}
        />
        <input type="submit" />
      </form>
    )
  }
}

export default FoodsCreate;
