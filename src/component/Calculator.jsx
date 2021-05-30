import React, { Component } from 'react';
import * as math from 'mathjs';
import './App.css';
import Display from './Display';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      displayvalue: 0,
    }
  }

  input = (event) => {
    this.setState({value: event.target.value});
  }

  calculate = () => {
    try {
      this.setState({displayvalue: math.simplify(this.state.value).toString()});
    }
    catch(e) {
      this.setState({displayvalue:'error'})
    }
  }

  render() {
    return (
      <div class="calculator">
        Input Expression:
        <span class="main-input">
          <input type="text" onChange={this.input}></input>
        </span>
        <button class="btn" onClick={ this.calculate }>Calculate</button>
        <Display value= { this.state.displayvalue === "undefined" ? 0 : this.state.displayvalue } />
      </div>
    );
  }
}
