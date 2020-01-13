import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export class NavBar extends Component {

    render() {
        return (
            <div className="container ui">
                <div className="ui top menu navbar" >
                    <NavLink exact to="/nba-showdown" className="item navbar-item">
                        Home
                    </NavLink>
                    <NavLink to="/nba-showdown/players" className="item navbar-item">
                        Players
                    </NavLink>
                    <NavLink to="/nba-showdown/teams" className="item navbar-item">
                        Teams
                    </NavLink>
                    <div className="right menu">
                        <NavLink to="/nba-showdown/compareplayers" className="ui item navbar-item">
                            Compare Players
                        </NavLink>
                        <NavLink to="/nba-showdown/compareteams" className="ui item navbar-item">
                            Compare Teams
                        </NavLink>
                        <NavLink to="/nba-showdown/simulate" className="ui item navbar-item">
                            Simulate Game
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;

