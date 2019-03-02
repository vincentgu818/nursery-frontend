import React, { Component } from "react";

import FeedingsTable from "./FeedingsTable"

class Feedings extends Component {
  render() {
    return (
      <div>
        Feedings
        <FeedingsTable feedings={this.props.feedings} />
      </div>
    )
  }
}

export default Feedings
