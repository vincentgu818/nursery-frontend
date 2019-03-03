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
    // make request to get all foods in db
    const foods = await axios.get('http://localhost:3000/foods');
    // set state foods array to array of foods returned from fetch
    this.setState({ foods: foods.data })
  }
  setCurrentDateTime = () => {
    // set date and time fields in create form to equal current date and time
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
    // change form input values in state
    this.setState({
      ...this.state,
      [form]: {
        ...this.state[form],
        [event.target.id]: event.target.value
      }
    })
  }
  createFood = async () => {
    // make request to save new food to database
    const newFood = await axios.post("http://localhost:3000/foods", {
      time: `${this.state.createFormData.date} ${this.state.createFormData.time}`,
      food: this.state.createFormData.food
    })

    // clear create form inputs
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
    // make request to delete food item from db
    await axios.delete(`http://localhost:3000/foods/${id}`)
    // re-fetch all foods from db
    this.fetchFoods()
  }
  editFood = async () => {
    // make request to update food item
    await axios.put(`http://localhost:3000/foods/${this.state.editId}`, {
      time: `${this.state.editFormData.date} ${this.state.editFormData.time}`,
      food: this.state.editFormData.food
    })

    // clear and hide edit form
    this.hideEditForm()

    // re-fetch all foods from db
    this.fetchFoods()
  }
  showEditForm = (food) => {
    // add values for edit form inputs
    // set showEditForm to true
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
    // clear edit form input values
    // set showEditForm to false
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
    // if this.state.showEditForm is true
    if (this.state.showEditForm) {
      // render edit form
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
    // fetch all foods when component first renders
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
