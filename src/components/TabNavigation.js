import React, { Component } from "react";
import { Link } from "react-router-dom";

class TabNavigation extends Component {
  isActive = (path) => {
    if (path === "/feedings") {
      return window.location.pathname === path || window.location.pathname === "/"
    } else {
      return window.location.pathname === path
    }
  }
  render() {
    return (
      <nav>
        <Link to="/feedings" className={`tab ${this.isActive("/feedings") ? "active" : ""}`}>Feedings</Link>
        <Link
          to="/foods"
          className={`tab ${this.isActive("/foods") ? "active" : ""}`}
        >
          Food
        </Link>
      </nav>
    )
  }
}

export default TabNavigation
