const { Schema, model } = require('mongoose');

const modelcoment = new Schema(
    {
        
        
    }, {
        timestamps: true
    });

module.exports = model('comentarios', modelcoment);