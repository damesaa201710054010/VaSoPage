const { Schema, model } = require('mongoose');

const modelcoment = new Schema(
    {
        usuario: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        producto: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        comentario: {
            type: String,
            required: true,
            unique: false,
            trim: true
        }
    }, {
        timestamps: true
    });

module.exports = model('comentarios', modelcoment);