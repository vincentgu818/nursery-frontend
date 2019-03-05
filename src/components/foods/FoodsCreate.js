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
      <form onSubmit={this.handleSubmit} className="create-form">
        <div className="form-container">
          <button
            type="button"
            className="date-time-btn"
            onClick={this.props.setCurrentDateTime}
          >
            Current Date and Time
          </button>
          <label htmlFor="date">Date</label>
          <div className="form-group">
            <input
              type="date"
              placeholder="mm/dd/yyyy"
              id="date"
              value={this.props.createFormData.date}
              onChange={(event) => this.props.handleChange(event, "createFormData")}
            />
          </div>

          <label htmlFor="time">Time</label>
          <div className="form-group">
            <input
              type="text"
              placeholder="hh:mm:ss"
              id="time"
              value={this.props.createFormData.time}
              onChange={(event) => this.props.handleChange(event, "createFormData")}
            />
          </div>
          <label htmlFor="food">Food</label>
          <div className="form-group">
            <input
              type="text"
              id="food"
              value={this.props.createFormData.food}
              onChange={(event) => this.props.handleChange(event, "createFormData")}
            />
          </div>
        </div>
        <input type="submit" />
      </form>
    )
  }
}

export default FoodsCreate;
