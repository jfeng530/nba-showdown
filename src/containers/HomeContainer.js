import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export class HomeContainer extends Component {
    render() {
        return (
            <div className="ui center aligned container">
                <div className="ui grid">

                    {/* THE TITLE CARD */}
                    {/* <div className="ui container home">
                        <h2 className="ui center aligned icon header">
                            <i className="basketball ball icon"/>
                            BS NBA Database
                        </h2>
                    </div> */}

                    {/* <header class="w3-container w3-red w3-center" style={{padding: "128px 16px"}}>
                        <h1 class="w3-margin w3-jumbo">START PAGE</h1>
                        <p class="w3-xlarge">Template by w3.css</p>
                        <button class="w3-button w3-black w3-padding-large w3-large w3-margin-top">Get Started</button>
                    </header> */}

                    <header className="ui container" id="title">
                        <h1 className="ui center aligned icon header" style={{
                            color: "orange",
                            background: "rgb(0, 0, 0)",
                            background: "rgba(0, 0, 0, 0.05)",
                            width: "100%",
                            padding: "15px",
                            }}>
                            <div className="ui hidden divider"></div>
                            <i className="basketball ball icon"/>
                            BS NBA Database
                        </h1>
                        <p style={{color: "rgb(29, 66, 138)"}}>A Worst Version of Basketball Reference and ESPN</p>
                    </header>

                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>

                    <div className="two column row">
                        <div className="column">
                            <img className="ui large rounded image" src="http://i.imgur.com/kuyqOdO.png"/>
                        </div>
                        <div className="column">
                            <h2 className="header">Player Profiles</h2>
                            <br></br>
                            <div className="description">
                                <p>View individual player profile and statistics including per-game-averages and season totals.</p>
                                <p>Includes every player that has played in the NBA from 1979 to 2019.</p>
                                <br></br>
                                <NavLink to="/players">
                                    <button className="ui inverted orange button">Search for Player</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <div class="ui hidden divider"></div>
                    <div class="ui hidden divider"></div>

                    <div className="two column row">
                        <div className="column">
                            <h2 className="header">Team Season Profiles</h2>
                            <br></br>
                            <div className="description">
                                <p>View team stats from a specific season.</p>
                                <p>See season stats of every player who played on that team that year.</p>
                                <br></br>
                                <NavLink to="/teams">
                                    <button className="ui inverted orange button">View All Teams</button>
                                </NavLink>
                            </div>
                        </div>
                        <div className="column">
                            <img className="ui large rounded image" src="http://i.imgur.com/bVFypps.png"/>
                        </div>
                    </div>

                    <div class="ui hidden divider"></div>
                    <div class="ui hidden divider"></div>

                    <div className="two column row">
                        <div className="column">
                            <img className="ui large rounded image" src="http://i.imgur.com/QHy2sjA.png"/>
                        </div>
                        <div className="column">
                            <h2 className="header">Player Comparison Chart</h2>
                            <br></br>
                            <div className="description">
                                <p>Compare players from across the generations</p>
                                <p>Dynamically view the better performance based on season totals and averages</p>
                                <br></br>
                                <NavLink to="/players">
                                    <button className="ui inverted orange button">Compare Players</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>


                    <div class="ui hidden divider"></div>
                    <div class="ui hidden divider"></div>

                    {/* <div className="ui items">
                        <div className="item">
                            <div className="content">
                                <br></br>
                                <h2 className="header">Simulate Game</h2>
                                <br></br>
                                <div className="description">
                                    <p>Simulate a game between any team from any era.</p>
                                    <p>View the box score of the simulated game, with accurate and reliable results.</p>
                                    <br></br>
                                    <NavLink to="/teams">
                                        <button className="ui inverted orange button">Simulate a Game</button>
                                    </NavLink>
                                </div>
                            </div>
                            <img className="ui large rounded image" src="http://i.imgur.com/AVGQO4p.png"/>
                        </div>
                    </div> */}

                    <div className="two column row">
                        <div className="column">
                            <h2 className="header">Simulate Game</h2>
                            <br></br>
                            <div className="description">
                                <p>Simulate a game between teams from any era.</p>
                                <p>View the box score of the simulated game, with accurate and reliable results.</p>
                                <br></br>
                                <NavLink to="/teams">
                                    <button className="ui inverted orange button">Simulate a Game</button>
                                </NavLink>
                            </div>
                        </div>
                        <div className="column">
                            <img className="ui large rounded image" src="http://i.imgur.com/AVGQO4p.png"/>
                        </div>
                    </div>

                    <br></br>
                </div>
            </div>   
        )
    }
}

export default HomeContainer;
