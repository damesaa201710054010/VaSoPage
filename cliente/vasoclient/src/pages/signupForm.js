import React, { Component } from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';
import imagenPrincipal from '../Image/enlamano.jpg';
import '../App.css';
const superagent = require('superagent');

class signupForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            edad: '',
            ciudad: '',
            direccion: '',
            email: '',
            password: '',
            estrato: '',
            estado: false,
            hasAgreed: false
        };
        this.handletChange = this.handletChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        superagent
            .post('http://localhost:3001/api/register')
            .send({
                name: this.state.name, edad: this.state.edad, ciudad: this.state.ciudad
                , direccion: this.state.direccion, email: this.state.email, password: this.state.password,
                estrato: this.state.estrato 
            })
            .end((err, res) => {
                var respuesta = JSON.parse(res.text)
                this.setState({
                    estado: respuesta['res']
                })
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
        if (variable) {
            return (
                <Redirect from="/" to="/iniciarSesion" />
            );
        } else {
            return (
                <div className="App">
                    <div className="App__Aside">
                        <img align="center" id="imagenPrincipal" src={imagenPrincipal} width="800" height="720" />
                    </div>
                    <div className="App__Form">
                        <div className="PageSwitcher">
                            <NavLink to="/iniciarSesion" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Iniciar Sesion</NavLink>
                            <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Registrarse</NavLink>
                        </div>
                        <div className="FormCenter">
                            <form onSubmit={this.handleSubmit} className="FormFields">
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="name">
                                        Nombre Completo
                        </label>
                                    <input type="text" id="name" className="FormField__Input" placeholder="Ingresa tu Nombre Completo" name="name"
                                        value={this.state.name} onChange={this.handletChange} />
                                </div>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="edad">
                                        edad
                        </label>
                                    <input type="int" id="edad" className="FormField__Input" placeholder="Ingresa su edad" name="edad"
                                        value={this.state.edad} onChange={this.handletChange} />
                                </div>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="ciudad">
                                        Ciudad de residencia
                        </label>
                                    <input type="text" id="ciudad" className="FormField__Input" placeholder="Ingrese la ciudad en la que reside actualmente" name="ciudad"
                                        value={this.state.ciudad} onChange={this.handletChange} />
                                </div>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="direccion">
                                        Direccion de residencia
                        </label>
                                    <input type="text" id="direccion" className="FormField__Input" placeholder="Ingrese la direccion de su residencia" name="direccion"
                                        value={this.state.direccion} onChange={this.handletChange} />
                                </div>

                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="email">Correo Electronico</label>
                                    <input type="email" id="email" className="FormField__Input" placeholder="Ingresa tu correo" name="email"
                                        value={this.state.email} onChange={this.handletChange} />
                                </div>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="password">Contraseña</label>
                                    <input type="password" id="password" className="FormField__Input" placeholder="Ingresa tu contraseña" name="password"
                                        value={this.state.password} onChange={this.handletChange} />
                                </div>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="estrato">Estrato</label>
                                    <input type="text" id="estrato" className="FormField__Input" placeholder="Ingresa su estrato" name="estrato"
                                        value={this.state.estrato} onChange={this.handletChange} />
                                </div>

                                <div className="FormField">
                                    <label className="FormField__CheckboxLabel">
                                        <input type="checkbox" id="hasAgreed" className="FormField__CheckboxLabel" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handletChange} />
                                        accepto todas las declaraciones en<a href="" className="FormField__TermsLink"> terminos de servicio</a>
                                    </label>
                                </div>

                                <div className="FormField" align="center">
                                    <button className="FormField__Button mr-20">Registrarse</button> <Link to="/iniciarSesion"
                                        className="FormField__Link">Ya soy miembro</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default signupForm;