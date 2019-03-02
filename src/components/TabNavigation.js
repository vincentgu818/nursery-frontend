import React, { Component } from "react";
import { Link } from "react-router-dom";

class TabNavigation extends Component {
  render() {
    return (
      <nav>
        <Link to="/feedings">Feedings</Link>
        <Link to="/foods">Food</Link>
      </nav>
    )
  }
}

export default TabNavigation
