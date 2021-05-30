import React, { Component } from 'react';
import './App.css';
import Display from './Display';

import * as math from 'mathjs-simple-integral'

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

  integrate = () => {
    try {
        this.setState({displayvalue: math.integral(this.state.value, this.state.variable).toString()});
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
        <button class="btn" onClick={ this.integrate }>Calculate</button>
        <Display value= { this.state.displayvalue } />
      </div>
    );
  }
}
