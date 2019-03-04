import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import moment from "moment"


import Chart from "./components/chart/Chart";
import TabNavigation from "./components/TabNavigation";
import Feedings from "./components/feedings/Feedings";
import Foods from "./components/foods/Foods";
import FeedingsEdit from "./components/feedings/FeedingsEdit"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedings: [],
      timeSpan: 168,
      createFormData: {
        start_date: "",
        start_time: "",
        end_date: "",
        end_time: "",
        side: "L"
      },
      isNursing: false,
      editFormData: {
        start_date: "",
        start_time: "",
        end_date: "",
        end_time: "",
        side: ""
      },
      editId: 0,
      showEditForm: false
    }
  }
  fetchFeedings = async () => {
    // make request to fetch all feedings within the last n hours
    const feedings = await axios.get(`https://nursery-api-stan-lee.herokuapp.com/feedings/last_hours/${this.state.timeSpan}`);
    // set feedings array in state equal to array of feedings returned from db
    this.setState({ feedings: feedings.data })
  }
  changeTimeSpan = (event) => {
    // change timeSpan in state to equal value from select box
    this.setState({ timeSpan: event.target.value }, () => {
      // after state has changed, call fetchFeedings again
      this.fetchFeedings()
    })
  }
  handleChange = (event, form) => {
    // change state of form inputs
    this.setState({
      ...this.state,
      [form]: {
        ...this.state[form],
        [event.target.id]: event.target.value
      }
    })
  }

  handleRadioChange = (event, form) => {
    // change state of form inputs
    this.setState({
      ...this.state,
      [form]: {
        ...this.state[form],
        side: (event.target.id === 'left' ? 'L' : 'R'),
      }
    })
  }

  createFeeding = async () => {
    // make request to save new feeding to database
    const newFeeding = await axios.post("https://nursery-api-stan-lee.herokuapp.com/feedings", {
      start_time: `${this.state.createFormData.start_date} ${this.state.createFormData.start_time}`,
      end_time: `${this.state.createFormData.end_date} ${this.state.createFormData.end_time}`,
      side: this.state.createFormData.side,
    })

    // clear create form inputs
    this.setState(prevState => {
      return {
        ...prevState,
        createFormData: {
          start_date: "",
          start_time: "",
          end_date: "",
          end_time: "",
          side: "L"
        }
      }
    })

    this.fetchFeedings()
  }
  setStartDateTimeToNow = () => {
    // set start date and start time fields in create form to current date and time
    this.setState({
      ...this.state,
      createFormData: {
        ...this.state.createFormData,
        start_date: moment().format("YYYY-MM-DD"),
        start_time: moment().format("HH:mm:ss")
      },
      isNursing: true
    })
  }
  setEndDateTimeToNow = () => {
    // set end date and start time fields in create form to current date and time
    this.setState({
      ...this.state,
      createFormData: {
        ...this.state.createFormData,
        end_date: moment().format("YYYY-MM-DD"),
        end_time: moment().format("HH:mm:ss")
      },
      isNursing: false
    }, () => { this.createFeeding() })

  }
  deleteFeeding = async (id) => {
    // make request to delete feeding
    await axios.delete(`https://nursery-api-stan-lee.herokuapp.com/feedings/${id}`)
    // call fetchFeedings again
    this.fetchFeedings()
  }
  editFeeding = async () => {
    // make request to edit feeding
    await axios.put(`https://nursery-api-stan-lee.herokuapp.com/feedings/${this.state.editId}`, {
      start_time: `${this.state.editFormData.start_date} ${this.state.editFormData.start_time}`,
      end_time: `${this.state.editFormData.end_date} ${this.state.editFormData.end_time}`,
      side: this.state.editFormData.side
    })

    // clear and hide edit form
    this.hideEditForm();

    // call fetchFeedings again
    this.fetchFeedings();
  }
  showEditForm = (feeding) => {
    // set values for edit form inputs
    // set showEditForm to true
    this.setState({
      ...this.state,
      editFormData: {
        start_date: moment(feeding.start_time).format("YYYY-MM-DD"),
        start_time: moment(feeding.start_time).format("HH:mm:ss"),
        end_date: moment(feeding.end_time).format("YYYY-MM-DD"),
        end_time: moment(feeding.end_time).format("HH:mm:ss"),
        side: feeding.side
      },
      editId: feeding.id,
      showEditForm: true
    })
  }
  hideEditForm = () => {
    // clear edit form input values
    // set showEditForm to false
    this.setState({
      ...this.state,
      editFormData: {
        start_date: "",
        start_time: "",
        end_date: "",
        end_time: "",
        side: ""
      },
      editId: 0,
      showEditForm: false
    })
  }
  renderEditForm = () => {
    // if this.state.showEditForm is true
    if (this.state.showEditForm) {
      // render feedings edit form
      return (
        <FeedingsEdit
          editFormData={this.state.editFormData}
          editFeeding={this.editFeeding}
          handleChange={this.handleChange}
          hideEditForm={this.hideEditForm}
        />
      )
    }
  }
  componentDidMount() {
    // call fetchFeedings when component first renders
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
            render={() => <Feedings
                            feedings={this.state.feedings}
                            deleteFeeding={this.deleteFeeding}
                            showEditForm={this.showEditForm}
                            renderEditForm={this.renderEditForm}
                            changeTimeSpan={this.changeTimeSpan}
                            handleChange={this.handleChange}
                            handleRadioChange={this.handleRadioChange}
                            setStartDateTimeToNow={this.setStartDateTimeToNow}
                            setEndDateTimeToNow={this.setEndDateTimeToNow}
                            createFeeding={this.createFeeding}
                            createFormData={this.state.createFormData}
                          />}
          />
          <Route
            path="/feedings"
            render={() => <Feedings
                            feedings={this.state.feedings}
                            deleteFeeding={this.deleteFeeding}
                            showEditForm={this.showEditForm}
                            renderEditForm={this.renderEditForm}
                            changeTimeSpan={this.changeTimeSpan}
                            handleChange={this.handleChange}
                            handleRadioChange={this.handleRadioChange}
                            setStartDateTimeToNow={this.setStartDateTimeToNow}
                            setEndDateTimeToNow={this.setEndDateTimeToNow}
                            isNursing={this.state.isNursing}
                            createFeeding={this.createFeeding}
                            createFormData={this.state.createFormData}
                          />}
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
