const { Schema, model } = require('mongoose');

const modelproduct = new Schema(
    {
        
    }, {
        timestamps: true
    });

module.exports = model('comentarios', modelproduct);