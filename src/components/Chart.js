import React, { Component } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const data = [
  {name: 'Page A', uv: 400, pv: 1400, amt: 1400},
  {name: 'Page B', uv: 500, pv: 2000, amt: 2000},
  {name: 'Page C', uv: 200, pv: 2200, amt: 2200},
  {name: 'Page D', uv: 700, pv: 2400, amt: 2400}
];

class Chart extends Component {
  render() {
    return (
      <div>
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
      </div>
    )
  }
}

export default Chart;
