import React, { Component } from 'react';
import '../App.css';
const superagent = require('superagent');

class coments extends Component {
    constructor() {
        super();
                this.state = {
            name: '',
            productos: [],
            productoEs: '',
            coment: '',
            estado: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handletChange = this.handletChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.productoEs);
        console.log(this.state.coment);
        superagent
            .post('http://localhost:3001/api/coment')
            .send({ name: this.state.name, productoEs:this.state.productoEs, coment: this.state.coment })
            .end((err, res) => {
                var respuesta = JSON.parse(res.text)
                this.setState({
                    estado: respuesta['res']
                })
                if(this.state.estado){
                    alert('Gracias por su comentario')
                    this.setState({
                        estado: false
                    })  
                }else{
                    alert('No pudo guardarse correctamente su comentario')
                }
            });
    }

    handletChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({productoEs: value});
        let name = target.name;
        this.setState({
            [name]: value
        });
    }

    componentDidMount = () => {
        superagent
            .get('http://localhost:3001/api/products')
            .end((err, res) => {
                const prod = JSON.parse(res.text)
                console.log(prod)
                this.setState({
                    productos: prod
                });
                console.log(this.state.productos)
            });
    }

    render() {
        const {nombre} = this.props;
        console.log({nombre});
        return (
            <div className="imagenes" align="center">
                <div className="App__Form1" >
                    <div className="FormCenter" >
                        <form onSubmit={this.handleSubmit} className="FormFields" >
                            <div className="FormField" >
                                <label className="FormField__Label" htmlFor="producto">Seleccione el producto a calificar
                                <select id="productoEs" value={this.state.productoEs} onChange={this.handletChange}  name="productoEs">
                                    {this.state.productos.map(producto => <option value={producto}>{producto}</option>)}
                                </select>
                                </label>
                            </div>
                            <div className="FomField">
                                <label className="FormField__Label" htmlFor="comentario">Escriba los comentarios al respecto</label>
                                <textarea  rows="4" cols="20" type="text" id="coment" className="FormField__Input2" placeholder="Escriba su comentario de calificacion" name="coment" 
                                value = {this.state.coment} onChange={this.handletChange} maxLength="150"/>
                            </div>
                            <h1>
                                -------------------------
                            </h1>
                            <div className="FormField" align="center">
                                <button className="FormField__Button2 mr-20" >Registrar calificacion</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default coments;