import React, { Component } from 'react';
import Loader from '../components/Loader'
import SimBoxScore from '../components/SimBoxScore'

export class SimResultContainer extends Component {

  state = {
    team1: null,
    team2: null,
    loaded: false
  }

  componentDidMount(){
    fetch(`http://nba-showdown.herokuapp.com/seasons/${this.props.season1}/${this.props.season2}`)
    .then(r => r.json())
    .then(res => {
      this.setState({
        loaded: true,
        team1: res.team1,
        team2: res.team2
      })
    })
  }

  render() {
    return (
      <>
        {this.state.loaded ? <SimBoxScore team1={this.state.team1} team2={this.state.team2} />: <Loader />}
      </>
    );
  }
}

export default SimResultContainer;
