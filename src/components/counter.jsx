import React, { Component } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"

class Counter extends Component {
  render() {
    return (
      <div className="d-flex flex-row justify-content-end align-items-stretch w-100">
        <span className={this.getBadgeClasses()}>
          {this.props.counter.value}
        </span>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm my-2 px-1"
        >
          <FontAwesomeIcon icon={faMinus} size="xs" />
        </button>
        <input
          type="text"
          className="m-2 p-1 rounded"
          placeholder="Add a product..."
          style={{ width: "100%", height: "auto" }}
          value={this.props.counter.name}
          onChange={e => {
            this.props.onNameChange(this.props.counter, e.target.value)
          }}
        ></input>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm my-2 px-1"
        >
          <FontAwesomeIcon icon={faPlus} size="xs" />
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter)}
          className="btn btn-danger btn-sm m-2"
          style={{ minWidth: 75, minHeight: 35 }}
          disabled={!this.props.isDeletable}
        >
          Delete
        </button>
      </div>
    )
  }

  //If the count of a product is at 0, it will be displayed with a yellow color
  getBadgeClasses = () => {
    return (
      "aligned-span badge m-2 badge-" +
      (this.props.counter.name.length <= 0 || this.props.counter.value == 0
        ? "warning"
        : "primary")
    )
  }

  //If the product is deletable it will return the button object, otherwise it will return an empty string
  getDeleteStyle = () => {
    return this.props.isDeletable
      ? { minWidth: 75, minHeight: 35 }
      : { minWidth: 75, minHeight: 35, disabled: true }
  }
}

export default Counter
