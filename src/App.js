import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from "./containers/MainContainer"
import NavContainer from "./containers/NavContainer"

class App extends React.Component {

  render(){
    return (
      <React.Fragment>
        <NavContainer />
        <MainContainer />
      </React.Fragment>
    )
  }
}

export default App;
