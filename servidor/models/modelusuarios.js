const { Schema, model } = require('mongoose');

const modelusuarios = new Schema(
    {
        
    }, {
        timestamps: true
    });

module.exports = model('comentarios', modelusuarios;