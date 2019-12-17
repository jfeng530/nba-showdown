import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export class NavBar extends Component {

    state = {}

    handleClick = (e, {name}) => this.setState({activeItem: name})

    render() {

        const { activeItem } = this.state

        return (
            <Menu>
                <Link to="/">
                    <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleClick}
                    >
                        Home
                    </Menu.Item>
                </Link>
                <Link to="/teams">
                    <Menu.Item
                        name='Teams'
                        active={activeItem === 'Teams'}
                        onClick={this.handleClick}
                    >
                        Teams
                    </Menu.Item>
                </Link>
                <Link to="/players">
                    <Menu.Item
                        name='players'
                        active={activeItem === 'players'}
                        onClick={this.handleClick}
                    >
                        Players
                    </Menu.Item>
                </Link>
                <Link to="/compare">
                    <Menu.Item
                        name='compare'
                        active={activeItem === 'compare'}
                        onClick={this.handleClick}
                    >
                        Compare Players
                    </Menu.Item>
                </Link>
            </Menu>
        );
    }
}

export default NavBar;

