import React, { Component } from "react";

class FeedingsTable extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Date/Time</th>
            <th>Duration</th>
            <th>Side</th>
          </tr>
        </thead>
      </table>
    )
  }
}

export default FeedingsTable;
