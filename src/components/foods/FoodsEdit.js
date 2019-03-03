import React, { Component } from "react";

class FoodsEdit extends Component {
  handleSubmit= (event) => {
    // prevent form from refreshing page
    event.preventDefault();
    // call editFood function
    this.props.editFood()
  }
  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              placeholder="mm/dd/yyyy"
              id="date"
              value={this.props.editFormData.date}
              onChange={(event) => this.props.handleChange(event, "editFormData")}
            />
            <label htmlFor="time">Time</label>
            <input
              type="text"
              placeholder="hh:mm:ss"
              id="time"
              value={this.props.editFormData.time}
              onChange={(event) => this.props.handleChange(event, "editFormData")}
            />
            <label htmlFor="food">Food</label>
            <input
              type="text"
              id="food"
              value={this.props.editFormData.food}
              onChange={(event) => this.props.handleChange(event, "editFormData")}
            />
            <button type="button" onClick={this.props.hideEditForm}>Cancel</button>
            <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default FoodsEdit;
