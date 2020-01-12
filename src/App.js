import React from 'react';
import './App.css';
import MainContainer from "./containers/MainContainer"
import NavContainer from "./containers/NavContainer"
import 'bootstrap/dist/css/bootstrap.min.css'
import Spinner from 'react-bootstrap/Spinner'
import { connect } from 'react-redux'

class App extends React.Component {

  state = {
    loaded: false
  }

  componentDidMount = async() => {
    let rawData = await fetch('http://nba-showdown.herokuapp.com/teams')
    let teams = await rawData.json()
    this.props.populateTeams(teams)
    let moreData = await fetch('http://nba-showdown.herokuapp.com/players')
    let players = await moreData.json()
    this.props.populatePlayers(players)
    this.setState({
      loaded: true
    })
}

  render(){
    return (
      <React.Fragment>
        <NavContainer />
        <div className="ui hidden divider middle aligned"></div>
        <div className="ui container center aligned">
          {this.state.loaded ? <MainContainer/> : <Spinner animation="grow" variant="primary"/>}
        </div>
        <br></br>
        <br></br>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    populatePlayers: (players) => {
      dispatch({
        type: "POPULATE_PLAYERS",
        players: players
      })
    },
    populateTeams: (teams) => {
      dispatch({
        type: "POPULATE_TEAMS",
        teams: teams
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(App);
