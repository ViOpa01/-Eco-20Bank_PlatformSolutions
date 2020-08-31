const mongoose = require('mongoose');

const merchantsModel = mongoose.model('merchants',new mongoose.Schema({
    merchantId  : String,
    merchantKey : String,
}));

module.exports = merchantsModel;
