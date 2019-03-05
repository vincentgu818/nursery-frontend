import React, { Component } from "react";

class FeedingsEdit extends Component {
  handleSubmit= (event) => {
    // prevent form from refreshing page
    event.preventDefault();
    // call editFeeding function
    this.props.editFeeding()
  }
  render() {
    return (
      <div className="modal-wrapper">
        <div className="modal">
          <form onSubmit={this.handleSubmit}>
            <div className="form-container">
              <label htmlFor="start_date">Start</label>
              <div className="form-group">
                <input
                  type="date"
                  placeholder="mm/dd/yyyy"
                  id="start_date"
                  value={this.props.editFormData.start_date}
                  onChange={(event) => this.props.handleChange(event, "editFormData")}
                />
                <input
                  type="text"
                  placeholder="hh:mm:ss"
                  id="start_time"
                  value={this.props.editFormData.start_time}
                  onChange={(event) => this.props.handleChange(event, "editFormData")}
                />
              </div>
              <label htmlFor="end_date">End</label>
              <div className="form-group">
                <input
                  type="date"
                  placeholder="mm/dd/yyyy"
                  id="end_date"
                  value={this.props.editFormData.end_date}
                  onChange={(event) => this.props.handleChange(event, "editFormData")}
                />
                <input
                  type="text"
                  placeholder="hh:mm:ss"
                  id="end_time"
                  value={this.props.editFormData.end_time}
                  onChange={(event) => this.props.handleChange(event, "editFormData")}
                />
              </div>
              <label htmlFor="side">Side</label>
              <div className="form-group">
                <input
                  type="text"
                  id="side"
                  value={this.props.editFormData.side}
                  onChange={(event) => this.props.handleChange(event, "editFormData")}
                />
              </div>
              <div className="form-btn-group">
                <button
                  type="button"
                  onClick={this.props.hideEditForm}
                  className="cancel-btn"
                >Cancel</button>
                <input type="submit" className="edit-submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default FeedingsEdit;
