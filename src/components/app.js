import React, { Component } from 'react';
import TableBoard from '../containers/table_board'
import Header from './header'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <TableBoard />
      </div>
    );
  }
}
