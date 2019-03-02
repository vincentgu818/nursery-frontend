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
    console.log(feedings);
    const feedingsWithDuration = feedings.data.map(feeding => {
      const duration = Date.parse(feeding.end_time) - Date.parse(feeding.start_time)
      return {
        ...feeding,
        duration: duration
      }
    })
    this.setState({ feedings: feedingsWithDuration })
  }
  componentDidMount() {
    this.fetchFeedings()
  }
  render() {
    // console.log(this.state.feedings);
    return (
      <Router>
        <div>
          <h1>Nursery</h1>
          <Chart feedings={this.state.feedings}/>
          <TabNavigation />
          <Route exact path="/" component={Feedings} />
          <Route path="/feedings" component={Feedings} />
          <Route path="/foods" component={Foods} />
        </div>
      </Router>
    );
  }
}

export default App;
