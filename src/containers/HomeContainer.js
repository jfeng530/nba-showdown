import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import Slider from 'react-slick'

export class HomeContainer extends Component {
    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return (
            <div className="ui center aligned basic segment">
                <div className="ui grid">
                    <div className="container ui">
                        <h2 className="ui center aligned icon header ui orange message">
                            <i className="basketball ball icon"/>
                            BS NBA Database
                        </h2>
                    </div>
                    <div class="ui hidden divider"></div>
                    <div class="ui hidden divider"></div>
                    <div class="ui hidden divider"></div>
                    <div className="ui items">
                        <div className="item">
                            <img className="ui large rounded image" src="http://i.imgur.com/kuyqOdO.png"/>
                            <div className="content">
                                <br></br>
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
                    </div>
                    <br></br>
                    <br></br>
                    <div className="ui items">
                        <div className="item">
                            <div className="content">
                                <br></br>
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
                            <img className="ui large rounded image" src="http://i.imgur.com/bVFypps.png"/>
                        </div>
                    </div>
                    <br></br>
                    <div className="ui items">
                        <div className="item">
                            <img className="ui large rounded image" src="http://i.imgur.com/QHy2sjA.png"/>
                            <div className="content">
                                <br></br>
                                <h2 className="header">Player Comparison Chart</h2>
                                <br></br>
                                <div className="description">
                                    <p>Compare player seasons</p>
                                    <p>Dynamically view the better performance based on season totals and averages</p>
                                    <br></br>
                                    <NavLink to="/players">
                                        <button className="ui inverted orange button">Compare Players</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="ui items">
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
                    </div>
                </div>
            </div>   
        );
    }
}

export default HomeContainer;
