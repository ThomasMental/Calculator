import React, { Component } from 'react';
import * as math from 'mathjs';
import './App.css';
import Display from './Display';

export default class Derivative extends Component {
  constructor(props) {
    super(props);
    this.state = ({
        value: null,
        variable: 'x',
        displayvalue: null,
    })
  }

  input = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    });
  }

  derivative = () => {
    try {
        this.setState({displayvalue: math.derivative(this.state.value, this.state.variable).toString()});
    }
    catch(e) {
        this.setState({displayvalue:'error'});
    }
  }

  render() {
    return (
      <div class="calculator">
        <span class="main-input">
          Expression: <input type="text" name="value" onChange={this.input}></input> <br></br>
          Variable: <input type="text" value={this.state.variable} name="variable" onChange={this.input}></input>
        </span>
        <button class="btn" onClick={ this.derivative }>Calculate</button>
        <Display value= { this.state.displayvalue } />
      </div>
    );
  }
}
