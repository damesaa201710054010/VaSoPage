import React, { Component } from 'react';
import {  Link} from 'react-router-dom';

class signupForm extends Component {
    render() {
        return (
            <div className="FormCenter">
                <form className="FormFields" onSubmit={this.handleSubmit}>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">Correo Electronico</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Ingresa tu Correo Electronico" name="email"/>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Contraseña</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Ingresa tu contraseña" name="password" />
                    </div>

                    <div className="FormField" align = "center">
                        <button className="FormField__Button mr-20">Iniciar Sesion</button> <Link to="/"
                            className="FormField__Link">Crear una cuenta</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default signupForm;