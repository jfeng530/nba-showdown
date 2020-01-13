import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export class NavBar extends Component {

    render() {
        return (
            <div className="container ui">
                <div className="ui top menu navbar" >
                    <NavLink exact to="/nba_frontend" className="item navbar-item">
                        Home
                    </NavLink>
                    <NavLink to="/players" className="item navbar-item">
                        Players
                    </NavLink>
                    <NavLink to="/teams" className="item navbar-item">
                        Teams
                    </NavLink>
                    <div className="right menu">
                        <NavLink to="/compareplayers" className="ui item navbar-item">
                            Compare Players
                        </NavLink>
                        <NavLink to="/compareteams" className="ui item navbar-item">
                            Compare Teams
                        </NavLink>
                        <NavLink to="/simulate" className="ui item navbar-item">
                            Simulate Game
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;

