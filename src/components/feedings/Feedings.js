import React, { Component } from "react";

import FeedingsTable from "./FeedingsTable"
import FeedingsCreate from "./FeedingsCreate"

class Feedings extends Component {
  render() {
    return (
      <div>
        Feedings
        <select defaultValue="24" onChange={this.props.changeTimeSpan}>
          <option value="24">Last 24 hours</option>
          <option value="48">Last 48 hours</option>
          <option value="72">Last 72 hours</option>
          <option value="168">Last 7 days</option>
          <option value="336">Last 14 days</option>
          <option value="720">Last 30 days</option>
          <option value="2160">Last 90 days</option>
        </select>
        <FeedingsCreate
          handleChange={this.props.handleChange}
          handleRadioChange={this.props.handleRadioChange}
          setStartDateTimeToNow={this.props.setStartDateTimeToNow}
          setEndDateTimeToNow={this.props.setEndDateTimeToNow}
          isNursing={this.props.isNursing}
          createFeeding={this.props.createFeeding}
          createFormData={this.props.createFormData}
        />
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
