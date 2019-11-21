const { Router } = require('express');
const connectionCtrl = {};
const us = require('./login');
const Connection = require('../models/modelcoment');
const router = Router();

connectionCtrl.expose = async (req, res) => {
    var savedata = new Connection({
        usuario: '', producto: req.body.productoEs, comentario: req.body.coment 
    }).save(function (err, result) {
        if (err) throw err;
        if (result) {
            res.json({"res": true})
        }
    })
};


router.route('/')
    .post(connectionCtrl.expose);

module.exports = router;