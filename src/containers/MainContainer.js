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

export class MainContainer extends Component {

    state = {
        loaded: false,
        rosterStats: []
    }

    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/">
                        <HomeContainer />
                    </Route>

                    <Route exact path="/players" >
                        <PlayersContainer players={this.state.players}/>
                        {/* <PlayersContainer players={this.state.players}/> */}
                    </Route>

                    {/* To render a Player Show page */}
                    <Route exact path="/players/:id" >
                        {this.renderPlayer}
                    </Route>

                    {/* To render a list of all Teams */}
                    <Route exact path="/teams" >
                        <IndexContainer teams={this.props.teams}/>
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
                    <Route exact path="/compareplayers" >
                        <CompareContainer />
                    </Route>

                    {/* To render the compare Teams page */}
                    <Route exact path="/compareteams" >
                        <CompareTeamsContainer />
                    </Route>
                </Switch>
            </>
        );
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
