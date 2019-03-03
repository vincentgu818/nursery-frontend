import React, { Component } from "react";
import moment from "moment";

class FeedingsTable extends Component {
  formatDuration = (milliseconds) => {
    if (milliseconds > 3600000) {
      // if feeding lasted longer than one hour
      // format duration with hours, minutes, and seconds
      return moment(moment.duration(milliseconds)._data).format("h[h]m[m]s[s]");
    } else if (milliseconds > 60000) {
      // if feeding lasted longer than one minute
      // format duration with just minutes and seconds
      return moment(moment.duration(milliseconds)._data).format("m[m]s[s]");
    } else {
      // format duration with just seconds
      return moment(moment.duration(milliseconds)._data).format("s[s]");
    }
  }
  renderRows = () => {
    return this.props.feedings.map(feeding => {
      return (
        <tr key={feeding.id}>
          <td>{moment(feeding.start_time).format("MMM D, YYYY")}</td>
          <td>{moment(feeding.start_time).format("h:mmA")}</td>
          <td>{this.formatDuration(feeding.duration)}</td>
          <td>{feeding.side}</td>
          <td>{feeding.foods.join(', ')}</td>
          <td>
            <button
              onClick={() => this.props.deleteFeeding(feeding.id)}
            >
              Delete
            </button>
          </td>
          <td>
            <button
              onClick={() => this.props.showEditForm(feeding)}
            >
              Edit
            </button>
          </td>
        </tr>
      )
    })
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Duration</th>
            <th>Side</th>
            <th>Foods</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    )
  }
}

export default FeedingsTable;
