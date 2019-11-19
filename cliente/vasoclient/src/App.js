import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink  } from 'react-router-dom';
import signupForm from './pages/signupForm.js';
import imagenPrincipal from './Image/enlamano.jpg';
import './App.css';
import signinForm from './pages/signinForm.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App__Aside">
            <img align="center" id="imagenPrincipal" src ={imagenPrincipal} width="800" height="672"/>  
          </div>

          <div className="App__Form">
            <div className="PageSwitcher">
              <NavLink to="/iniciarSesion" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Iniciar Sesion</NavLink>
              <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Registrarse</NavLink>
            </div>
          
            <Route exact path="/" component= {signupForm}>
            </Route>

            <Route path="/iniciarSesion" component = {signinForm}>
            </Route>

          </div>
        </div>
      </Router>
      
    );

  }
}

export default App;
