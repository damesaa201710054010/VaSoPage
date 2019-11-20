
const { Router } = require('express');
const connectionCtrl = {};
const Connection = require('../models/Connection');
const router = Router();

connectionCtrl.expose = async (req, res) => {
    console.log(req.body.queryResulte);
    consulta = Connection.find({ "tipoDeActividad": "inscripcion" });
    response = "Para 2020-1 de agosto 6 a Noviembre 22";
    res.json({
        "fulfillmentText": response
    });

};

router.route('/')
    .post(expose);

module.exports = router;