import React, { Component } from 'react';

const Child = ({ x }) => <div>x = {x}</div>

const Parent = () => <Child x={1} />

class App extends Component {
  state = {
    name: "",
    count: 0
  }

  _onInputChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  _inc = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  _dec = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.name || "Hello World"}</h1>
        <Parent />
        <input value={this.state.name} onChange={this._onInputChange} />
        <h1>{this.state.count}</h1>
        <button onClick={this._inc}>Increment</button>
        <button onClick={this._dec}>Decrement</button>
      </div>
    );
  }
}

export default App;
