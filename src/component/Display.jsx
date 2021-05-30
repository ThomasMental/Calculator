import React, { Component } from 'react';
import './App.css';

export default class Display extends Component {
    render() {
      return (
        <div class="result">
          { this.props.value }
        </div>
      );
    }
  }