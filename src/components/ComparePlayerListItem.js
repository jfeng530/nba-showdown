import React, { Component } from 'react';

export class ComparePlayerListItem extends Component {
  render() {
    return (
      <div className="item" onClick={this.props.handlePlayerClick(this.props.player)}>
        {this.props.player.full_name}
      </div>
    )
  }
}

export default ComparePlayerListItem;
