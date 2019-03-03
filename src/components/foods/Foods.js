import React, { Component } from "react";

import FoodsTable from "./FoodsTable";

class Foods extends Component {
  render() {
    return (
      <div>
        Foods
        <FoodsTable foods={this.props.foods} />
      </div>
    )
  }
}

export default Foods
