import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import IndexContainer from './IndexContainer'
import PlayerShowContainer from './PlayerShowContainer'
import CompareContainer from './CompareContainer'
import HomeContainer from './HomeContainer'
import TeamRosterContainer from './TeamRosterContainer'
import PlayersContainer from './PlayersContainer'
import CompareTeamsContainer from './CompareTeamsContainer'
import SimulateContainer from './SimulateContainer'
import SimResultContainer from './SimResultContainer'
import ShowTeams from './ShowTeams'

export class MainContainer extends Component {

    state = {
        loaded: false,
        rosterStats: []
    }

    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/nba-showdown">
                        <HomeContainer />
                    </Route>

                    <Route exact path="/nba-showdown/players" >
                        <PlayersContainer players={this.state.players}/>
                        {/* <PlayersContainer players={this.state.players}/> */}
                    </Route>

                    {/* To render a Player Show page */}
                    <Route exact path="/nba-showdown/players/:id" >
                        {this.renderPlayer}
                    </Route>

                    {/* To render a list of all Teams */}
                    <Route exact path="/nba-showdown/teams" >
                        <ShowTeams teams={this.props.teams}/>
                    </Route>
                    
                    {/* To render a list of all seasons by a single team */}
                    <Route exact path="/nba-showdown/teams/:id" >
                        {this.renderTeamYears}
                    </Route>

                    {/* To render the roster of a specifc Team + Season */}
                    <Route exact path="/nba-showdown/teams/:id/:season" >
                        {this.renderTeamRoster}
                    </Route>

                    {/* To render the compare Players/Teams page */}
                    <Route exact path="/nba-showdown/compareplayers" >
                        <CompareContainer />
                    </Route>

                    {/* To render the compare Teams page */}
                    <Route exact path="/nba-showdown/compareteams" >
                        <CompareTeamsContainer />
                    </Route>

                    <Route exact path="/nba-showdown/simulate">
                        <SimulateContainer />
                    </Route>

                    <Route exact path="/nba-showdown/simulate/:teamone/:teamtwo">
                        {this.renderSimResults}
                    </Route>
                </Switch>
            </>
        );
    }

    renderSimResults = (renderParams) => {
        const season1id = parseInt(renderParams.match.params.teamone)
        const season2id = parseInt(renderParams.match.params.teamtwo)
        return <SimResultContainer season1={season1id} season2={season2id} />
    }

    renderTeamYears = (renderParams) => {
        const id = parseInt(renderParams.match.params.id)
        let team = this.props.teams.find(team => team.id === id)
        return <IndexContainer team={team} />
    }

    renderPlayer = (renderParams) => {
        const id = parseInt(renderParams.match.params.id)
        return <PlayerShowContainer playerId={ id } />
    } 

    renderTeamRoster = (renderParams) => {
        const teamId = parseInt(renderParams.match.params.id)
        const seasonId = parseInt(renderParams.match.params.season)
        return <TeamRosterContainer teamId={teamId} seasonId={seasonId}/>
    }
}

const mapStateToProps = state => {
    return { teams: state.teams }
}

export default connect(mapStateToProps)(MainContainer);
