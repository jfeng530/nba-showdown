import React, { Component } from 'react';

export class CompareTeamListItem extends Component {

  handleClick = () => {
    this.props.handleTeamClick(this.props.team)
  }

  render() {
    return (
      <div className="item" onClick={this.handleClick}>
        {this.props.team.full_name}
      </div>
    );
  }
}

export default CompareTeamListItem;

