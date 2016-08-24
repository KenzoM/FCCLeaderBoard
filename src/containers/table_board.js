import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { recentData } from '../actions/index'
import { allTimeData } from '../actions/index'

export default class TableBoard extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    this.props.recentData() //fetch data most recent top
  }
  renderData(userData,index){
    const name = userData.username;
    const recent = userData.recent;
    const allTime = userData.alltime;
    return(
      <tr key={name}>
        <td>{index + 1}</td>
        <td>{name}</td>
        <td>{recent}</td>
        <td>{allTime}</td>
      </tr>
    )
  }
  getRecentData(){
    console.log('recent data')
    this.props.recentData()
  }
  getAllTimeData(){
    console.log('all-time data')
    this.props.allTimeData();
  }
  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Camper Name</th>
            <th
              onClick={this.getRecentData.bind(this)}
              >Points in 30 days
            </th>
            <th
              onClick={this.getAllTimeData.bind(this)}
              >All-time Posts
            </th>
          </tr>
        </thead>
        <tbody>
          {this.props.FCCData.map(this.renderData)}
        </tbody>
      </table>
    )
  }
}
function mapStateToProps(state){
  return {
    FCCData: state.collectData
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({ recentData, allTimeData }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TableBoard);
