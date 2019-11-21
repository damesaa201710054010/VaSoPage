const { Router } = require('express');
const connectionCtrl = {};
const Connection = require('../models/modelusuarios');
const router = Router();

connectionCtrl.expose = async (req, res) => {
    //const consulta = Connection.find({ correo: req.body.email});
    Connection.find({ 
        correo: req.body.email,
        contraseña: req.body.password
      }, function callback(error, a) {
        if(a.length>0){
            res.json({"res":true})
        }else{
            res.json({"res":false})
        }
      });
};


router.route('/')
    .post(connectionCtrl.expose);

module.exports = router;