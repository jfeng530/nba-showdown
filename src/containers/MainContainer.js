import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import IndexContainer from './IndexContainer'
import PlayerShowContainer from './PlayerShowContainer'
import CompareContainer from './CompareContainer'
import HomeContainer from './HomeContainer'

export class MainContainer extends Component {

    state = {
        teams: [],
        player: {},
        roster: []
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
                    <Route exact path="/">
                        <HomeContainer />
                    </Route>

                    <Route exact path="/players" >
                        <IndexContainer show={'players'}/>
                    </Route>

                    {/* To render a list of all Teams */}
                    <Route exact path="/teams" >
                        <IndexContainer teams={this.state.teams}/>
                    </Route>

                    {/* To render a Player Show page */}
                    <Route exact path="/players/:id" >
                        {this.renderPlayer}
                    </Route>

                    {/* To render a list of all seasons by a single team */}
                    <Route exact path="/teams/:id" >
                        {this.renderTeamYears}
                    </Route>

                    {/* To render the roster of a specifc Team + Season */}
                    <Route exact path="/teams/:id/:season" >
                        {this.renderTeamRoster}
                    </Route>

                    {/* To render the compare Players/Teams page */}
                    <Route exact path="/compare/" >
                        <CompareContainer />
                    </Route>
                </Switch>
            </>
        );
    }

    renderTeamYears = (renderParams) => {
        const id = parseInt(renderParams.match.params.id)
        const team = this.state.teams.find(team => team.id === id)
        return <IndexContainer team={team} />
    }

    renderPlayer = (renderParams) => {
        const id = parseInt(renderParams.match.params.id)
        return <PlayerShowContainer playerId={ id } />
    }

    renderTeamRoster = (renderParams) => {
        const id = parseInt(renderParams.match.params.id)
        const season = parseInt(renderParams.match.params.season)
        return <IndexContainer seasons={season} teamId={id} />
    }
}

export default MainContainer;
