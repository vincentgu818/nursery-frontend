import React, { Component } from "react";


import FeedingsTable from "./FeedingsTable"
import FeedingsCreate from "./FeedingsCreate"

class Feedings extends Component {
  render() {
    return (
      <div>
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

export default Feedings;
