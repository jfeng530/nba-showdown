import React from 'react';
import './App.css';
import MainContainer from "./containers/MainContainer"
import NavContainer from "./containers/NavContainer"
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {

  render(){
    return (
      <React.Fragment>
        <NavContainer />
        <div className="ui hidden divider middle aligned"></div>
        <MainContainer />
      </React.Fragment>
    )
  }
}

export default App;
