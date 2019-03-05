import React, { Component } from "react";

class FoodsEdit extends Component {
  handleSubmit= (event) => {
    // prevent form from refreshing page
    event.preventDefault();
    // call editFood function
    this.props.editFood()
  }
  render() {
    return (
      <div className="modal-wrapper">
        <div className="modal">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="date">Date</label>
            <div className="form-group">
              <input
                type="date"
                placeholder="mm/dd/yyyy"
                id="date"
                value={this.props.editFormData.date}
                onChange={(event) => this.props.handleChange(event, "editFormData")}
              />
            </div>
            <label htmlFor="time">Time</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="hh:mm:ss"
                id="time"
                value={this.props.editFormData.time}
                onChange={(event) => this.props.handleChange(event, "editFormData")}
              />
            </div>
            <label htmlFor="food">Food</label>
            <div className="form-group">
              <input
                type="text"
                id="food"
                value={this.props.editFormData.food}
                onChange={(event) => this.props.handleChange(event, "editFormData")}
              />
            </div>
            <div className="form-btn-group">
              <button
                type="button"
                onClick={this.props.hideEditForm}
                className="cancel-btn"
              >Cancel</button>
              <input className="edit-submit" type="submit" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default FoodsEdit;
