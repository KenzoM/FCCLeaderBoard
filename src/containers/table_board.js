import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

export default class TableBoard extends Component {
  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Camper Name</th>
            <th>Points in 30 days</th>
            <th>All-time Posts</th>
          </tr>
        </thead>
        <tbody>
          <tr>
             <td></td>
             <td></td>
             <td></td>
             <td></td>
          </tr>
        </tbody>
      </table>
    )
  }
}
