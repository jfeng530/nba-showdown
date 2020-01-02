import React from 'react';

const Loader = () => {
  return (
    <div className="ui container">
      <div className="ui active dimmer">
        <div className="ui text loader">Simulating Game...</div>
      </div>
    </div>
  );
}

export default Loader;
