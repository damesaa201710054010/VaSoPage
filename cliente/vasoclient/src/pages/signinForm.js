    import React, { Component } from 'react';
    import {  Link, NavLink, Route , Redirect, Switch } from 'react-router-dom';
    import imagenPrincipal from '../Image/enlamano.jpg';
    import logo from '../Image/19a8e9e2-9be8-4d6c-9ae5-b59656a0f697_200x200.png';
    import letra from '../Image/letras2.png';
    import '../App.css';
    import  Coments from './coments';
    const superagent = require('superagent');

    class signinForm extends Component {
        constructor() {
            super();
            this.state = {
                email: '',
                password: '',
                estado: false
            };
            this.handletChange = this.handletChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleSubmit(e) {
            e.preventDefault();
            superagent
                .post('https://vasopharmacy.de/api/login')
                .send({ email: this.state.email, password: this.state.password })
                .end((err, res) => {
                    var respuesta = JSON.parse(res.text)
                    this.setState({
                        estado: respuesta['res']
                    })
                    if(this.state.estado){
                        alert('Bienvenido')
                    }else {
                        alert('Su clave o contraseña no son validos')
                    }
                });
        }


        handletChange(e) {
            let target = e.target;
            let value = target.type === 'checkbox' ? target.checked : target.value;
            let name = target.name;
            this.setState({
                [name]: value
            });
        }

        render() {
            const variable = this.state.estado; 
            if(variable) {
                return (
                    <Coments em = {this.state.email}></Coments>
                );
            } else {
                return (
                    <div className="App">
                        <div className="App__Aside">
                            <img className="segunda" align="center" id="imagenPrincipal" src={imagenPrincipal} />
                            <img className="primera" align="center" id="logo" src={logo} />
                        </div>
                        <div className="App__Form">
                            <div className="PageSwitcher">
                                <NavLink to="/iniciarSesion" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Iniciar Sesion</NavLink>
                                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Registrarse</NavLink>
                            </div>
                            <div className="FormCenter">
                                <form onSubmit={this.handleSubmit} className="FormFields" >
                                    <div className="FormField">
                                        <label className="FormField__Label" htmlFor="email">Correo Electronico</label>
                                        <input type="email" id="email" className="FormField__Input" x-moz-errormessage="Por favor, especifique una dirección de correo válida." placeholder="Ingresa tu Correo Electronico" name="email"
                                            value={this.state.email} onChange={this.handletChange} />
                                    </div>
                                    <div className="FormField">
                                        <label className="FormField__Label" htmlFor="password">Contraseña</label>
                                        <input type="password" id="password" className="FormField__Input" placeholder="Ingresa tu contraseña" name="password"
                                            value={this.state.password} onChange={this.handletChange} />
                                    </div>
                                    <div className="FormField" align="center">
                                        <button className="FormField__Button mr-20" >Iniciar Sesion</button> <Link to="/"
                                            className="FormField__Link">Crear una cuenta</Link>
                                    </div>
                                </form>
                                <img className="letri" align="center"  id="letras" src={letra} />
                            </div>
                        </div>
                    </div>
                );
            }
        }
    }
    export default signinForm;