const express  =  require('express');

const router  =  express.Router();

require('dotenv').config();

const qrController = require('../controllers/qr.controller');

router.use('/getqr', qrController);

router.use(function(req, res, next) {
    return res.status(404).send({ app_name : "Ecobank QR API", version : "v1", "message": "Route not found" });
});

module.exports = router;