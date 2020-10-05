const mongoose = require('mongoose');

const terminalsModel = mongoose.model('terminals',new mongoose.Schema({
    terminalId  : String,
    merchantKey : String,
}));

module.exports = terminalsModel;
