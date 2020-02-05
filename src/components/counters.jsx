import React, { Component } from "react"
import Counter from "./counter"

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onAdd}
          className="btn btn-lightgray btn-sm m-2"
        >
          Add
        </button>
        <button
          onClick={this.props.onReset}
          className="btn btn-lightgray btn-sm m-2"
        >
          Reset
        </button>
        <div className="d-flex flex-column justify-content-center align-items-center">
          {this.props.counters.map(counter => (
            <Counter
              key={counter.id}
              onDelete={this.props.onDelete}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onNameChange={this.props.onNameChange}
              counter={counter}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Counters
