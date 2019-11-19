import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class signupForm extends Component {
    render() {
        return (
            <div className="FormCenter">
                <form className="FormFields" onSubmit={this.handleSubmit}>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">
                            Nombre Completo
                        </label>
                        <input type="text" id="name" className="FormField__Input" placeholder="Ingresa tu Nombre Completo" name="name" />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="edad">
                            edad
                        </label>
                        <input type="int" id="edad" className="FormField__Input" placeholder="Ingresa su edad" name="edad" />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="ciudad">
                            Ciudad de residencia
                        </label>
                        <input type="text" id="ciudad" className="FormField__Input" placeholder="Ingrese la ciudad en la que reside actualmente" name="ciudad" />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="direccion">
                            Direccion de residencia
                        </label>
                        <input type="text" id="direccion" className="FormField__Input" placeholder="Ingrese la direccion de su residencia" name="direccion" />
                    </div>
                    
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">Correo Electronico</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Ingresa tu correo" name="email" />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Contraseña</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Ingresa tu contraseña" name="password" />
                    </div>

                    <div className="FormField">
                        <label className="FormField__CheckboxLabel">
                            <input type="checkbox" id="email" className="FormField__CheckboxLabel" name="hasAgreed" />
                            accepto todas las declaraciones en<a href="" className="FormField__TermsLink"> terminos de servicio</a>
                        </label>
                    </div>

                    <div className="FormField" align="center">
                        <button className="FormField__Button mr-20">Registrarse</button> <Link to="/iniciarSesion"
                            className="FormField__Link">Ya soy miembro</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default signupForm;