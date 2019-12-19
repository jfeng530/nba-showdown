import React, { Component } from 'react';

export class ComparePlayerSeasons extends Component {

  handleClick = () => {
    this.props.handleSeasonClick(this.props.season)
  }

  render() {
    return (
      <div className="item" onClick={this.handleClick}>
        {this.props.season.season.year}
      </div>
    )
  }
}

export default ComparePlayerSeasons;
