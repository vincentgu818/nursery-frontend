import React, { Component } from "react";
import moment from "moment";

class FoodsTable extends Component {
  renderRows = () => {
    // map through array of food objects and return <tr> for each
    return this.props.foods.map(food => {
      return (
        <tr key={food.id}>
          <td>{moment(food.time).format("MMM D, YYYY")}</td>
          <td>{moment(food.time).format("h:mmA")}</td>
          <td>{food.food}</td>
          <td className="btn-cell">
            <span className="btn-group">
              <i
                className="far fa-trash-alt"
                onClick={() => this.props.deleteFood(food.id)}
              ></i>
              <i
                className="fas fa-edit"
                onClick={() => this.props.showEditForm(food)}
              ></i>
            </span>
          </td>
        </tr>
      )
    })
  }
  render() {
    return (
      <div className="table-container">
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
      </div>
    )
  }
}

export default FoodsTable;
