import React, { Component } from 'react';
import './App.css';
import Calculator from './Calculator';
import Calculus from './Calculus';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Tabs.css';

export default class App extends Component {
  render() {
    return (
        <Tabs>
          <TabList>
            <Tab>Calculator</Tab>
            <Tab>Calculus</Tab>
          </TabList>

          <TabPanel>
            <Calculator />
          </TabPanel>

          <TabPanel>
            <Calculus />
          </TabPanel>
        </Tabs>
    );
  }
}

