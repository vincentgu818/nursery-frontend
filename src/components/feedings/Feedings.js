import React, { Component } from "react";

import FeedingsTable from "./FeedingsTable"

class Feedings extends Component {
  render() {
    return (
      <div>
        Feedings
        <select defaultValue="168" onChange={this.props.changeTimeSpan}>
          <option value="24">Today</option>
          <option value="24">Last 48 hours</option>
          <option value="168">Last 7 days</option>
          <option value="336">Last 14 days</option>
          <option value="672">Last month</option>
          <option value="8064">Last year</option>
        </select>
        <FeedingsTable
          feedings={this.props.feedings}
          showEditForm={this.props.showEditForm}
          deleteFeeding={this.props.deleteFeeding}
        />
        {this.props.renderEditForm()}
      </div>
    )
  }
}

export default Feedings
