import React, { Component } from 'react';
import Loader from '../components/Loader'
import SimBoxScore from '../components/SimBoxScore'

export class SimResultContainer extends Component {

  state = {
    team1: null,
    team2: null,
    loaded: false
  }

  async componentDidMount(){
    try {
      const res = await fetch(`https://nba-showdown.herokuapp.com/seasons/${this.props.season1}/${this.props.season2}`)
      if (!res.ok) {
        throw Error(res.statusText)
      } else {
        const json = await res.json()
        this.setState({
          loaded: true,
          team1: json.team1,
          team2: json.team2
        })
      }
    } catch (error) {
      console.log(error)
    }
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
