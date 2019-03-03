import React, { Component } from "react";

class FeedingsEdit extends Component {
  handleSubmit= (event) => {
    // prevent form from refreshing page
    event.preventDefault();
    // call editFeeding function
    this.props.editFeeding()
  }
  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="start_date">Start Date</label>
            <input
              type="date"
              placeholder="mm/dd/yyyy"
              id="start_date"
              value={this.props.editFormData.start_date}
              onChange={(event) => this.props.handleChange(event, "editFormData")}
            />
            <label htmlFor="start_time">Start Time</label>
            <input
              type="text"
              placeholder="hh:mm:ss"
              id="start_time"
              value={this.props.editFormData.start_time}
              onChange={(event) => this.props.handleChange(event, "editFormData")}
            />
            <label htmlFor="end_date">End Date</label>
            <input
              type="date"
              placeholder="mm/dd/yyyy"
              id="end_date"
              value={this.props.editFormData.end_date}
              onChange={(event) => this.props.handleChange(event, "editFormData")}
            />
            <label htmlFor="end_time">End Time</label>
            <input
              type="text"
              placeholder="hh:mm:ss"
              id="end_time"
              value={this.props.editFormData.end_time}
              onChange={(event) => this.props.handleChange(event, "editFormData")}
            />
            <label htmlFor="side">Side</label>
            <input
              type="text"
              id="side"
              value={this.props.editFormData.side}
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

export default FeedingsEdit;
