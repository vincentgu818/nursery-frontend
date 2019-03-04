import React, { Component } from "react";

class FeedingsInterval extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.setInterval}>
          <label htmlFor="start_date">Start Date</label>
          <input
            type="date"
            placeholder="mm/dd/yyyy"
            id="start_date"
            value={this.props.intervalFormData.start_date}
            onChange={(event) => this.props.handleChange(event, "intervalFormData")}
          />
          <label htmlFor="start_time">Start Time</label>
          <input
            type="text"
            placeholder="hh:mm:ss"
            id="start_time"
            value={this.props.intervalFormData.start_time}
            onChange={(event) => this.props.handleChange(event, "intervalFormData")}
          />
          <label htmlFor="end_date">End Date</label>
          <input
            type="date"
            placeholder="mm/dd/yyyy"
            id="end_date"
            value={this.props.intervalFormData.end_date}
            onChange={(event) => this.props.handleChange(event, "intervalFormData")}
          />
          <label htmlFor="end_time">End Time</label>
          <input
            type="text"
            placeholder="hh:mm:ss"
            id="end_time"
            value={this.props.intervalFormData.end_time}
            onChange={(event) => this.props.handleChange(event, "intervalFormData")}
          />
          <input type="submit" />
        </form>
        <select defaultValue="24" onChange={this.props.changeTimeSpan}>
          <option value="24">Last 24 hours</option>
          <option value="48">Last 48 hours</option>
          <option value="72">Last 72 hours</option>
          <option value="168">Last 7 days</option>
          <option value="336">Last 14 days</option>
          <option value="720">Last 30 days</option>
          <option value="2160">Last 90 days</option>
        </select>
      </div>
    )
  }
}

export default FeedingsInterval
