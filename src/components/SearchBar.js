import React, { Component } from 'react';

export class SearchBar extends Component {
    render() {
        return (
            <div className="ui search center aligned">
                <div className="ui icon input">
                <input className="prompt" onChange={this.props.onChange} />
                <i className="search icon" />
                </div>
            </div>
        )
    }
}

export default SearchBar;
