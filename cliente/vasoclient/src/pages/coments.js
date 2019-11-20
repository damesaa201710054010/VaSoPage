import React, { Component } from 'react';
import imagenPrincipal from '../Image/enlamano.jpg';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

class coments extends Component {
    render() {
        return (
            
            <select>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option selected value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>

        );
    }
}

export default coments;