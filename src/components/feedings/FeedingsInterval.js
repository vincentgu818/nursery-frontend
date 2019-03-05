import React, { Component } from "react";

class FeedingsInterval extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showIntervalForm: false
    }
  }
  toggleintervalForm = () => {
    this.setState({ showIntervalForm: !this.state.showIntervalForm })
  }
  renderIntervalForm = () => {
    if (this.state.showIntervalForm) {
      return (
        <form onSubmit={this.props.setInterval}>
          <div className="form-container">
            <div className="form-row">
              <div>
                <label htmlFor="start_date">Start</label>
                <div className="form-row">
                  <input
                    type="date"
                    placeholder="mm/dd/yyyy"
                    id="start_date"
                    value={this.props.intervalFormData.start_date}
                    onChange={(event) => this.props.handleChange(event, "intervalFormData")}
                  />
                  <input
                    type="text"
                    placeholder="hh:mm:ss"
                    id="start_time"
                    value={this.props.intervalFormData.start_time}
                    onChange={(event) => this.props.handleChange(event, "intervalFormData")}
                  />
                </div>
              </div>
              <div>
              <label htmlFor="end_date">End</label>
              <div className="form-row">
                <input
                  type="date"
                  placeholder="mm/dd/yyyy"
                  id="end_date"
                  value={this.props.intervalFormData.end_date}
                  onChange={(event) => this.props.handleChange(event, "intervalFormData")}
                />
                <input
                  type="text"
                  placeholder="hh:mm:ss"
                  id="end_time"
                  value={this.props.intervalFormData.end_time}
                  onChange={(event) => this.props.handleChange(event, "intervalFormData")}
                />
                </div>
              </div>
            </div>
          </div>
          <input className="interval-submit" type="submit" />
        </form>
      )
    }
  }
  render() {
    return (
      <div className="interval-controls">
        <div className="interval-buttons">
          <button onClick={this.toggleintervalForm}>
            { this.state.showIntervalForm ? "Hide Time Span" : "Set Time Span" }
          </button>
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
        {this.renderIntervalForm()}
      </div>
    )
  }
}

export default FeedingsInterval
