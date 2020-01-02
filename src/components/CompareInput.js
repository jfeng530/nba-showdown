import React, { Component } from 'react';

export class CompareInput extends Component {

  handleKeyDown = (event) => {
    this.props.handleKeyDown(event)
  }
  
  render() {
    return (
      <div className="ui segment thing">
        <div className="ui blue inverted form">
          <label>Player Name</label>
          <input placeholder='Enter a name' onKeyDown={this.handleKeyDown} />
        </div>
      </div>
    );
  }
}

export default CompareInput;
