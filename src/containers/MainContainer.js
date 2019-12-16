import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import IndexContainer from './IndexContainer'
import PlayerShowContainer from './PlayerShowContainer'

export class MainContainer extends Component {

    state = {
        teams: [],
        player: {}
    }
    
    componentDidMount = async() => {
        let rawData = await fetch('http://localhost:3000/teams')
        let teams = await rawData.json()
        this.setState({
            teams: teams
        })
    }

    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/players" >
                        <IndexContainer show={'players'}/>
                    </Route>

                    <Route exact path="/teams" >
                        <IndexContainer teams={this.state.teams}/>
                    </Route>

                    <Route exact path="/players/:id" >
                        {this.renderPlayer}
                    </Route>

                    <Route exact path="/teams/:id" >
                        {this.renderTeamYears}
                    </Route>

                    <Route exact path="/teams/:id/:season" >
                        {this.renderTeamRoster}
                    </Route>
                </Switch>
            </>
        );
    }

    renderTeamYears = (renderParams) => {
        const id = parseInt(renderParams.match.params.id)
        const team = this.state.teams.find(team => team.id === id)
        return <IndexContainer team={ team } />
    }

    renderPlayer = (renderParams) => {
        const id = parseInt(renderParams.match.params.id)
        return <PlayerShowContainer playerId={ id } />
    }

    renderTeamRoster = (renderParams) => {
        const id = parseInt(renderParams.match.params.id)
        const year = parseInt(renderParams.match.params.season)
    }
}

export default MainContainer;
