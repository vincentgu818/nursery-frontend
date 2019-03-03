import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";


import Chart from "./components/chart/Chart";
import TabNavigation from "./components/TabNavigation";
import Feedings from "./components/feedings/Feedings";
import Foods from "./components/foods/Foods";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedings: []
    }
  }
  fetchFeedings = async () => {
    const feedings = await axios.get('http://localhost:3000/feedings');
    this.setState({ feedings: feedings.data })
  }
  componentDidMount() {
    this.fetchFeedings()
  }
  render() {
    return (
      <Router>
        <div>
          <h1>Nursery</h1>
          <Chart feedings={this.state.feedings}/>
          <TabNavigation />
          <Route
            exact path="/"
            render={() => <Feedings feedings={this.state.feedings} />}
          />
          <Route
            path="/feedings"
            render={() => <Feedings feedings={this.state.feedings} />}
          />
          <Route
            path="/foods"
            render={() => <Foods foods={this.state.foods} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
