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
                <div class="ui divider"></div>
                <br></br>
                <div className="ui items">
                    <div className="item">
                        <div className="content">
                            <br></br>
                            <h2 className="header">Player Profiles</h2>
                            <br></br>
                            <div className="description">
                                <p>View individual player profile and statistics including per-game-averages and season totals.</p>
                                <p>Includes every player that has played in the NBA from 1979 to 2019.</p>
                                <br></br>
                                <NavLink to="/teams">
                                    <button className="ui inverted orange button">Team Page</button>
                                </NavLink>
                            </div>
                        </div>
                        <Slider {...settings}>
                            <div>
                                <img className="ui medium rounded image" src="http://i.imgur.com/TRxXXyU.png"/>
                            </div>
                            <div>
                                <img className="ui medium rounded image" src="http://i.imgur.com/TRxXXyU.png"/>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>   
        );
    }
}

export default HomeContainer;
