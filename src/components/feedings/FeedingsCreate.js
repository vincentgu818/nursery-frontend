import React, { Component } from "react";

class FeedingsCreate extends Component {
  handleSubmit = (event) => {
    // prevent form from refreshing browser
    event.preventDefault()
    // call createFood function
    this.props.createFeeding()
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.isNursing ?
          <div onClick={this.props.setEndDateTimeToNow}>Stop Nursing</div> :
          <div onClick={this.props.setStartDateTimeToNow}>Start Feeding</div>
        }
        {this.props.isNursing ? "" :
        <>
          <label htmlFor="start_date">Start Date</label>
          <input
            type="date"
            placeholder="mm/dd/yyyy"
            id="start_date"
            value={this.props.createFormData.start_date}
            onChange={(event) => this.props.handleChange(event, "createFormData")}
          />
          <label htmlFor="start_time">Start Time</label>
          <input
            type="text"
            placeholder="hh:mm:ss"
            id="start_time"
            value={this.props.createFormData.start_time}
            onChange={(event) => this.props.handleChange(event, "createFormData")}
          />
          <label htmlFor="end_date">End Date</label>
          <input
            type="date"
            placeholder="mm/dd/yyyy"
            id="end_date"
            value={this.props.createFormData.end_date}
            onChange={(event) => this.props.handleChange(event, "createFormData")}
          />
          <label htmlFor="end_time">End Time</label>
          <input
            type="text"
            placeholder="hh:mm:ss"
            id="end_time"
            value={this.props.createFormData.end_time}
            onChange={(event) => this.props.handleChange(event, "createFormData")}
          />
        </>
        }
        <input
          type="radio"
          id="left"
          name="side"
          onChange={(event) => this.props.handleRadioChange(event, "createFormData")}
        />
        <label htmlFor="left">Left</label>
        <input
          type="radio"
          id="right"
          name="side"
          onChange={(event) => this.props.handleRadioChange(event, "createFormData")}
        />
        <label htmlFor="right">Right</label>
        { this.props.isNursing ? "" : <input type="submit" /> }
      </form>
    )
  }
}

export default FeedingsCreate
