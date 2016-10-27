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
    this.props.recentData() //fetch data most recent top when page is rendered
  }
  renderData(userData,index){
    const FCC_URL = 'https://www.freecodecamp.com/';
    const img = userData.img;
    const name = userData.username;
    const recent = userData.recent;
    const allTime = userData.alltime;
    return(
      <tr key={name}>
        <td className="rank">{index + 1}</td>
        <td>
          <img className="img-responsive"
          src={img}
          alt='FCC profile'
          /> <a href={FCC_URL + name}>{name}</a>
        </td>
        <td className="recent">{recent}</td>
        <td className="all-time">{allTime}</td>
      </tr>
    )
  }
  getRecentData(){
    this.props.recentData()
  }
  getAllTimeData(){
    this.props.allTimeData();
  }
  render(){
    let recentTimeStyle = this.props.FCCData.dataType === "Recent" ? "all-time clickable high-light" : "all-time clickable";
    let allTimeStyle = this.props.FCCData.dataType === "Alltime" ? "all-time clickable high-light" : "all-time clickable";
    return(
      <div className="table-responsive">
        <table className="table table-hover table-striped table-bordered">
          <thead>
            <tr>
              <th className="rank">#</th>
              <th className="username">Camper Name</th>
              <th id='col-recent'className={recentTimeStyle}
                onClick={this.getRecentData.bind(this)}>
                Points in 30 days
              </th>
              <th id='col-alltime' className={allTimeStyle}
                onClick={this.getAllTimeData.bind(this)}
                >All-time Posts
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.FCCData.data.map(this.renderData)}
          </tbody>
        </table>
      </div>
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
