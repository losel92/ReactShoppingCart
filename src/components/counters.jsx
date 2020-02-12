import React, { Component } from "react"
import Counter from "./counter"

import ReactCSSTransitionGroup from "react-addons-css-transition-group"

class Counters extends Component {
  render() {
    return (
      <div style={{ margin: "auto", maxWidth: 500, textAlign: "right" }}>
        <button
          onClick={this.props.onClear}
          className="btn btn-lightgray btn-sm m-2"
          style={{ minWidth: 75, minHeight: 35 }}
        >
          Clear
        </button>
        <button
          onClick={this.props.onReset}
          className="btn btn-lightgray btn-sm mr-2"
          style={{ minWidth: 75, minHeight: 35 }}
        >
          Reset
        </button>
        <div className="d-flex flex-column justify-content-center align-items-end">
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            {this.props.counters.map(counter => (
              <Counter
                key={counter.id}
                onDelete={this.props.onDelete}
                onIncrement={this.props.onIncrement}
                onDecrement={this.props.onDecrement}
                onNameChange={this.props.onNameChange}
                counter={counter}
                isDeletable={this.getDeletable(counter.id)}
              />
            ))}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }

  getDeletable = counterId => {
    const index = this.props.counters.findIndex(x => x.id == counterId)
    return index < this.props.counters.length - 1
  }
}

export default Counters
