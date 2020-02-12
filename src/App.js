import React, { Component } from "react"

import Navbar from "./components/navbar"
import Counters from "./components/counters"

class App extends Component {
  state = {
    counters: [{ id: 0, value: 0, name: "" }]
  }

  //Increments the product quantity
  handleIncrement = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value++
    this.setState({ counters })
  }

  //Decrements the product quantity
  handleDecrement = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    if (
      counters[index].value > 1 ||
      (counters[index].value > 0 && !counters[index].name.length)
    ) {
      counters[index].value--
      this.setState({ counters })
    }
  }

  //Adds an empty product to the end of the list
  handleAdd = () => {
    let counters = [...this.state.counters]
    const cId = counters[counters.length - 1].id + 1
    counters.push({ id: cId, value: 0, name: "" })
    this.setState({ counters })
  }

  //Deletes a given product from the list
  handleDelete = counter => {
    const counters = this.state.counters.filter(c => c.id !== counter.id)
    this.setState({ counters })
  }

  //Clears the list
  handleClear = () => {
    let counters = this.state.counters.map(c => {
      c.value = 0
      c.name = ""
      return c
    })
    this.setState({ counters })
  }

  //Resets and removes all products
  handleReset = () => {
    let counters = [{ id: 1, value: 0, name: "" }]
    this.setState({ counters })
  }

  handleNameChange = (counter, name) => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].name = name

    if (counters[index].value == 0) counters[index].value++

    //If this is the last product and the user starts typing, a new product will be added
    if (counters.length <= index + 1 && name.length > 0)
      this.setState({ counters }, this.handleAdd)
    else this.setState({ counters })
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
            onClear={this.handleClear}
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
