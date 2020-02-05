import React, { Component } from "react"

import Navbar from "./components/navbar"
import Counters from "./components/counters"

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1, name: "" },
      { id: 2, value: 1, name: "" },
      { id: 3, value: 1, name: "" },
      { id: 4, value: 1, name: "" }
    ]
  }

  //Increments the
  handleIncrement = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value++
    this.setState({ counters })
  }

  handleDecrement = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    if (counters[index].value > 1) {
      counters[index].value--
      this.setState({ counters })
    }
  }

  handleAdd = () => {
    let counters = [...this.state.counters]
    const cId = counters[counters.length - 1].id + 1
    counters.push({ id: cId, value: 1, name: "" })
    this.setState({ counters })
  }

  handleDelete = counter => {
    const counters = this.state.counters.filter(c => c.id !== counter.id)
    this.setState({ counters })
  }

  handleReset = () => {
    let counters = this.state.counters.map(c => {
      c.value = 1
      c.name = ""
      return c
    })
    this.setState({ counters })
  }

  handleNameChange = (counter, name) => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].name = name
    this.setState({ counters })
  }

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onAdd={this.handleAdd}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onNameChange={this.handleNameChange}
          />
        </main>
      </React.Fragment>
    )
  }
}

export default App
