import React, { Component } from "react";
import axios from "axios";
import moment from "moment"

import FoodsTable from "./FoodsTable";
import FoodsCreate from "./FoodsCreate";
import FoodsEdit from "./FoodsEdit";

class Foods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [],
      createFormData: {
        date: "",
        time: "",
        food: ""
      },
      editFormData: {
        date: "",
        time: "",
        food: ""
      },
      editId: 0,
      showEditForm: false
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
  handleChange = (event, form) => {
    this.setState({
      ...this.state,
      [form]: {
        ...this.state[form],
        [event.target.id]: event.target.value
      }
    })
  }
  createFood = async () => {
    const newFood = await axios.post("http://localhost:3000/foods", {
      time: `${this.state.createFormData.date} ${this.state.createFormData.time}`,
      food: this.state.createFormData.food
    })

    this.setState(prevState => {
      return {
        ...prevState,
        foods: [newFood.data, ...prevState.foods],
        createFormData: {
          date: "",
          time: "",
          food: ""
        }
      }
    })
  }
  deleteFood = async (id) => {
    await axios.delete(`http://localhost:3000/foods/${id}`)
    this.fetchFoods()
  }
  editFood = async () => {
    await axios.put(`http://localhost:3000/foods/${this.state.editId}`, {
      time: `${this.state.editFormData.date} ${this.state.editFormData.time}`,
      food: this.state.editFormData.food
    })

    this.hideEditForm()

    this.fetchFoods()
  }
  showEditForm = (food) => {
    this.setState({
      ...this.state,
      editFormData: {
        date: moment(food.time).format("YYYY-MM-DD"),
        time: moment(food.time).format("HH:mm:ss"),
        food: food.food
      },
      editId: food.id,
      showEditForm: true
    })
  }
  hideEditForm = () => {
    this.setState({
      ...this.state,
      editFormData: {
        date: "",
        time: "",
        food: ""
      },
      editId: 0,
      showEditForm: false
    })
  }
  renderEditForm = () => {
    if (this.state.showEditForm) {
      return (
        <FoodsEdit
          editFormData={this.state.editFormData}
          editFood={this.editFood}
          handleChange={this.handleChange}
          hideEditForm={this.hideEditForm}
        />
      )
    }
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
        <FoodsTable
          deleteFood={this.deleteFood}
          showEditForm={this.showEditForm}
          foods={this.state.foods}
        />
        { this.renderEditForm() }
      </div>
    )
  }
}

export default Foods
