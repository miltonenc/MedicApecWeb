import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
           MedicApec
          </h1>
          <h4>
           Bienvenido!
          </h4>
          <h6>Accede a nuestra plataforma. :D</h6>
          
          <a class="App-link" href="login.html">Login</a>
        </header>
      </div>
    );
  }
}

export default App;
