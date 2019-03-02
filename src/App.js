import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Chart from "./components/Chart"
import TabNavigation from "./components/TabNavigation"
import Feedings from "./components/feedings/Feedings"
import Foods from "./components/foods/Foods"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Nursery</h1>
          <Chart />
          <TabNavigation />
          <Route exact path="/" component={Feedings} />
          <Route path="/feedings" component={Feedings} />
          <Route path="/food" component={Foods} />
        </div>
      </Router>
    );
  }
}

export default App;
