const { Router } = require('express');
const connectionCtrl = {};
const Connection = require('../models/modelcoment');
const router = Router();

connectionCtrl.expose = async (req, res) => {
    console.log(req.body.queryResulte);
    consulta = Connection.save({ "nombre":req["nombre"], "producto":req["producto"], "comentario":req["comentario"] });
    response = true;
    res.json({
        "res": response
    });

};

router.route('/')
    .post(connectionCtrl.expose);

module.exports = router;