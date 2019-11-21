const { Router } = require('express');
const connectionCtrl = {};
const Connection = require('../models/modelproduct');
const router = Router();

connectionCtrl.expose = async (req, res) => {
    Connection.find({},{"nombre":1,"_id":0},
        function callback(error, a) {
            const respuesta = []
            for(var i = 0; i < a.length; i++)
            {
                respuesta.push(a[i].nombre);
            }
            res.json(respuesta)
        });

};

router.route('/')
    .get(connectionCtrl.expose);

module.exports = router;