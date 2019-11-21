const { Router } = require('express');
const connectionCtrl = {};
const Connection = require('../models/modelusuarios');
const router = Router();

connectionCtrl.expose = async (req, res) => {
    /*console.log(req.body);
    consulta = Connection.save({
        nombre: req.body.name, edad: req.body.edad, cuidad: req.body.cuidad,
        dirección: req.body.dirección, correo: req.body.email, estrato: req.body.estrato,
        contraseña: req.body.password
    });*/
    var savedata = new Connection({
        nombre: req.body.name, edad: req.body.edad, ciudad: req.body.ciudad,
        direccion: req.body.direccion, correo: req.body.email, estrato: req.body.estrato,
        contraseña: req.body.password
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