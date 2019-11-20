const { Router } = require('express');
const connectionCtrl = {};
const Connection = require('../models/modelusuarios');
const router = Router();

connectionCtrl.expose = async (req, res) => {
    console.log(req.body);
    consulta = Connection.find({"nombre":req["nombre"], "contraseña":req["contraseña"]});
    response = true;
    res.json({
        "res": response
    });

};

router.route('/')
    .post(connectionCtrl.expose);

module.exports = router;