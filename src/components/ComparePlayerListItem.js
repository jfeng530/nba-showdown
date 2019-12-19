import React, { Component } from 'react';

export class ComparePlayerListItem extends Component {

  handleClick = () => {
    this.props.handlePlayerClick(this.props.player)
  }
  
  render() {
    return (
      <div className="item" onClick={this.handleClick}>
          {this.props.player.full_name}
      </div>
    )
  }
}

export default ComparePlayerListItem;
