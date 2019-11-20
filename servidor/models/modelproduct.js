const { Schema, model } = require('mongoose');

const modelproduct = new Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        nombre: {
            type: String,
            required: true,
            unique: false,
            trim: true
        }
    }, {
        timestamps: true
    });

module.exports = model('productos', modelproduct);