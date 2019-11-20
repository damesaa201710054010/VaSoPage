const { Router } = require('express');
const connectionCtrl = {};
const Connection = require('../models/modelproduct');
const router = Router();

connectionCtrl.expose = async (req, res) => {
    console.log(req.body.queryResulte);
    consulta = Connection.find();
    response = consuta;
    res.json({
        "res": response
    });

};

router.route('/')
    .post(connectionCtrl.expose);

module.exports = router;