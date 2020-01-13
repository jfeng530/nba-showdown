import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export class HomeContainer extends Component {
    render() {
        return (
            <div className="ui center aligned container">
                <div className="ui grid">

                    <header className="ui container" id="title">
                        <h1 className="ui center aligned icon header sign" style={{
                            color: "rgb(238, 135, 51)",
                            background: "rgb(0, 0, 0)",
                            background: "rgba(0, 0, 0, 0.05)",
                            width: "100%",
                            padding: "15px",
                            }}>
                            <div className="ui hidden divider"></div>
                            <i className="basketball ball icon"/>
                            NBA Showdown
                        </h1>
                        <p className="desc" style={{color: "rgb(29, 66, 138)"}}>The Ultimate NBA Reference Application</p>
                    </header>

                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>

                    <div className="two column row">
                        <div className="column">
                            <img className="ui large rounded image" src="http://i.imgur.com/kuyqOdO.png" alt="Player Profile"/>
                        </div>
                        <div className="column">
                            <h2 className="header">Player Profiles</h2>
                            <br></br>
                            <div className="description">
                                <p>View individual player profile and statistics including per-game-averages and season totals.</p>
                                <p>Includes every player that has played in the NBA from 1979 to 2019.</p>
                                <br></br>
                                <NavLink to="/nba_frontend/players">
                                    <button className="ui inverted orange button">Search for Player</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>

                    <div className="two column row">
                        <div className="column">
                            <h2 className="header">Team Season Profiles</h2>
                            <br></br>
                            <div className="description">
                                <p>View team stats from a specific season.</p>
                                <p>See season stats of every player who played on that team that year.</p>
                                <br></br>
                                <NavLink to="/nba_frontend/teams">
                                    <button className="ui inverted orange button">View All Teams</button>
                                </NavLink>
                            </div>
                        </div>
                        <div className="column">
                            <img className="ui large rounded image" src="http://i.imgur.com/bVFypps.png" alt="Team Profile"/>
                        </div>
                    </div>

                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>

                    <div className="two column row">
                        <div className="column">
                            <img className="ui large rounded image" src="http://i.imgur.com/QHy2sjA.png" alt="Player Comparison Chart"/>
                        </div>
                        <div className="column">
                            <h2 className="header">Player Comparison Chart</h2>
                            <br></br>
                            <div className="description">
                                <p>Compare players from across the generations</p>
                                <p>Dynamically view the better performance based on season totals and averages</p>
                                <br></br>
                                <NavLink to="/nba_frontend/players">
                                    <button className="ui inverted orange button">Compare Players</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>


                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>

                    <div className="two column row">
                        <div className="column">
                            <h2 className="header">Simulate Game</h2>
                            <br></br>
                            <div className="description">
                                <p>Simulate a game between teams from any era.</p>
                                <p>View the box score of the simulated game, with accurate and reliable results.</p>
                                <br></br>
                                <NavLink to="/nba_frontend/simulate">
                                    <button className="ui inverted orange button">Simulate a Game</button>
                                </NavLink>
                            </div>
                        </div>
                        <div className="column">
                            <img className="ui large rounded image" src="http://i.imgur.com/AVGQO4p.png" alt="Simulation of Game"/>
                        </div>
                    </div>

                    <br></br>
                </div>
            </div>   
        )
    }
}

export default HomeContainer;
