import React, { Component } from 'react';
import './App.css';
import Derivative from './Derivative';
import Integral from './Integral';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default class Calculus extends Component {
  render() {
    return (

            <Derivative />

    );
  }
}
