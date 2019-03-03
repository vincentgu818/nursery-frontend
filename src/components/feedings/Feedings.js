import React, { Component } from "react";

import FeedingsTable from "./FeedingsTable"

class Feedings extends Component {
  render() {
    return (
      <div>
        Feedings
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
