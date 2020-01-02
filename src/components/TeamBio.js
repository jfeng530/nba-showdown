import React, { Component } from 'react';

export class TeamBio extends Component {

  render() {
    return (
      <div className="ui grid">
            <div className="row">
                <div className="ten wide column">
                    <h1 className="ui header">
                        {this.props.team.full_name}
                        <div className="sub header">Conference: {this.props.team.conference}</div>
                        <div className="sub header">Division: {this.props.team.division}</div>
                    </h1>
                </div>
                <div className="six wide column">
                    <div className="ui tiny images">
                      <img className="ui tiny image" src={this.props.team.logo} alt={this.props.team.full_name}/>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default TeamBio;
