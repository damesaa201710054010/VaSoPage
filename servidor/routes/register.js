const { Router } = require('express');
const connectionCtrl = {};
const Connection = require('../models/modelusuarios');
const router = Router();

connectionCtrl.expose = async (req, res) => {
    console.log(req.body.queryResulte);
    consulta = Connection.save({ "nombre":req["nombre"], "edad":req["edad"], "cuidad":req["ciudad"], 
                                    "dirección":req["direccion"], "correo":req["correo"], "estrato":req["estrato"],
                                    contraseña:req["contraseña"]});
    response = true;
    res.json({
        "res": response
    });

};

router.route('/')
    .post(connectionCtrl.expose);

module.exports = router;