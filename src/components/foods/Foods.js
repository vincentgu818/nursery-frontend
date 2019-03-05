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
    const foods = await axios.get('https://nursery-api-stan-lee.herokuapp.com/foods');
    // set state foods array to array of foods returned from fetch
    this.setState({ foods: foods.data })
  }
  formatUTC = (value) => {
    return moment(value).utc().format("YYYY-MM-DD HH:mm:ss")
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
    const { date, time, food } = this.state.createFormData;
    // make request to save new food to database
    const newFood = await axios.post("https://nursery-api-stan-lee.herokuapp.com/foods", {
      time: this.formatUTC(`${date} ${time}`),
      food: food
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
    await axios.delete(`https://nursery-api-stan-lee.herokuapp.com/foods/${id}`)
    // re-fetch all foods from db
    this.fetchFoods()
  }
  editFood = async () => {
    const { date, time, food } = this.state.editFormData;
    // make request to update food item
    await axios.put(`https://nursery-api-stan-lee.herokuapp.com/foods/${this.state.editId}`, {
      time: this.formatUTC(`${date} ${time}`),
      food: food
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
