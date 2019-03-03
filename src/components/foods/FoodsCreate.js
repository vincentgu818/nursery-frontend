import React, { Component } from "react";

class FoodsCreate extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
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
          onChange={this.props.handleChange}
        />
        <label htmlFor="time">Time</label>
        <input
          type="text"
          placeholder="hh:mm:ss"
          id="time"
          value={this.props.createFormData.time}
          onChange={this.props.handleChange}
        />
        <button
          type="button"
          onClick={this.props.setCurrentDateTime}
          onChange={this.props.handleChange}
        >
          Current Date and Time
        </button>
        <label htmlFor="food">Food</label>
        <input
          type="text"
          id="food"
          value={this.props.createFormData.food}
          onChange={this.props.handleChange}
        />
        <input type="submit" />
      </form>
    )
  }
}

export default FoodsCreate;
