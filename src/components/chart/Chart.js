import React, { Component } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import moment from "moment";

class Chart extends Component {
  formatDateTime = (tickItem) => {
    return moment(tickItem).format('MMM D, YYYY h:mmA')
  }
  formatDuration = (tickItem) => {
    if (tickItem > 3600000) {
      return moment(moment.duration(tickItem)._data).format("h[h]m[m]s[s]");
    } else if (tickItem > 60000) {
      return moment(moment.duration(tickItem)._data).format("m[m]s[s]");
    } else {
      return moment(moment.duration(tickItem)._data).format("s[s]");
    }
  }
  render() {
    return (
      <div>
      <LineChart width={600} height={300} data={this.props.feedings}>
        <Line type="monotone" dataKey="duration" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis
          dataKey="start_time"
          tickFormatter={this.formatDateTime}
          label={{ value: 'Time', position: 'insideBottom' }}
          height={75}
        />
        <Tooltip
          formatter={this.formatDuration}
          labelFormatter={this.formatDateTime}
        />
        <YAxis
          tickFormatter={this.formatDuration}
          label={{ value: 'Duration', angle: -90, position: 'insideLeft' }}
          width={100}
        />
      </LineChart>
      </div>
    )
  }
}

export default Chart;
