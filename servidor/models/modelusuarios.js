const { Schema, model } = require('mongoose');

const modelusuarios = new Schema(
    {
        nombre: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        edad: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        ciudad: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        direccion: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        correo: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        estrato: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        contraseña: {
            type: String,
            required: true,
            unique: false,
            trim: true
        }
    }, {
        timestamps: true
    });

module.exports = model('usuarios', modelusuarios);