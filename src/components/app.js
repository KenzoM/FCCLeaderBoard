import React, { Component } from 'react';
import TableBoard from '../containers/table_board';
import Header from './header';

import style from '../stylesheets/style.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TableBoard />
      </div>
    );
  }
}
