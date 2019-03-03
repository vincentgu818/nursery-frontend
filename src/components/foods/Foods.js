import React, { Component } from "react";
import axios from "axios";
import moment from "moment"

import FoodsTable from "./FoodsTable";
import FoodsCreate from "./FoodsCreate";

class Foods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [],
      createFormData: {
        date: "",
        time: "",
        food: ""
      }
    }
  }
  fetchFoods = async () => {
    const foods = await axios.get('http://localhost:3000/foods');
    this.setState({ foods: foods.data })
  }
  setCurrentDateTime = () => {
    this.setState({
      ...this.state,
      createFormData: {
        ...this.state.createFormData,
        date: moment().format("YYYY-MM-DD"),
        time: moment().format("HH:mm:ss")
      }
    })
  }
  handleChange = (event) => {
    this.setState({
      ...this.state,
      createFormData: {
        ...this.state.createFormData,
        [event.target.id]: event.target.value
      }
    })
  }
  createFood = async () => {
    await axios.post("http://localhost:3000/foods", {
      time: `${this.state.createFormData.date} ${this.state.createFormData.time}`,
      food: this.state.createFormData.food
    })

    this.fetchFoods()
  }
  componentDidMount() {
    this.fetchFoods()
  }
  render() {
    return (
      <div>
        Foods
        <FoodsCreate
          setCurrentDateTime={this.setCurrentDateTime}
          handleChange={this.handleChange}
          createFood={this.createFood}
          createFormData={this.state.createFormData}
        />
        <FoodsTable foods={this.state.foods} />
      </div>
    )
  }
}

export default Foods
