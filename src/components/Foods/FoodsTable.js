import React, { Component } from "react";
import moment from "moment";

class FoodsTable extends Component {
  renderRows = () => {
    return this.props.foods.map(food => {
      return (
        <tr key={food.id}>
          <td>{moment(food.time).format("MMM D, YYYY")}</td>
          <td>{moment(food.time).format("h:mmA")}</td>
          <td>{food.food}</td>
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
            <th>Food</th>
          </tr>
        </thead>
        <tbody>
          { this.renderRows() }
        </tbody>
      </table>
    )
  }
}

export default FoodsTable;
