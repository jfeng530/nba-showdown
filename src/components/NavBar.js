import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export class NavBar extends Component {

    state = {}

    handleClick = (e, {name}) => this.setState({activeItem: name})

    render() {

        const { activeItem } = this.state

        let blue = "#1D428A !important"

        return (
            // <Menu>
            //     <Link to="/">
            //         <Menu.Item
            //             name='home'
            //             active={activeItem === 'home'}
            //             onClick={this.handleClick}
            //         >
            //             Home
            //         </Menu.Item>
            //     </Link>
            //     <Link to="/teams">
            //         <Menu.Item
            //             name='Teams'
            //             active={activeItem === 'Teams'}
            //             onClick={this.handleClick}
            //         >
            //             Teams
            //         </Menu.Item>
            //     </Link>
            //     <Link to="/players">
            //         <Menu.Item
            //             name='players'
            //             active={activeItem === 'players'}
            //             onClick={this.handleClick}
            //         >
            //             Players
            //         </Menu.Item>
            //     </Link>
            //     <Link to="/compare">
            //         <Menu.Item
            //             name='compare'
            //             active={activeItem === 'compare'}
            //             onClick={this.handleClick}
            //         >
            //             Compare Players
            //         </Menu.Item>
            //     </Link>
            // </Menu>
            <div className="container ui">
                <div className="ui menu navbar" >
                    <NavLink exact to="/" className="item navbar-item">
                        Home
                    </NavLink>
                    <NavLink to="/players" className="item navbar-item">
                        Players
                    </NavLink>
                    <NavLink to="/teams" className="item navbar-item">
                        Teams
                    </NavLink>
                    <div className="right menu">
                        <NavLink to="/compare" className="ui item navbar-item">
                            Compare Players
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;

