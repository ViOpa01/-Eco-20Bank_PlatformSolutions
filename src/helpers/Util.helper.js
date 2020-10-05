// created by kayode shobalaje

require('dotenv').config();

const Merchants = require('../models/merchants.model');

const Terminals = require('../models/terminals.model');

module.exports =  {

    getData: {
        env: process.env.ENV,
        mode: process.env.MODE,
        sessionId: process.env.TEST_SESSION_ID,
        requestUrl: process.env.TEST_REQUESTURL,
        serviceMaintenance: process.env.SERVICEMAINTENANCE,
        serviceMaintenanceTime: process.env.SERVICEMAINTENANCETIME,
        overwriteTerminalID: process.env.TEST_TERMINALID,
        overwriteMerchantID: process.env.TEST_MERCHANTID
    },

    hasWhiteSpace(s) {
        return /\s/g.test(s);//boolean
    },

    async findTerminal(merchantKey) {
        let query = { merchant_key: merchantKey };

        let merc = await Terminals.find(query, function(err, result) {
            if (err) throw err;
            console.log('outputsTerms', result);

            return result
		});
        
        return merc[0];
    },

    async findMerchant(merchantKey) {
        let query = { merchant_key: merchantKey };

        let merc = await Merchants.find(query, function(err, result) {
            if (err) throw err;
            console.log('outputsMers', result);

            return result
		});
        
        return merc[0];
    },

    isset(ref){
        return typeof ref !== 'undefined'
    },

    serviceLimit() {
        if (this.getData.serviceMaintenance === true){
            let limitResponse = {
                status: 13,
                message: "Service not available, Please try again later.",
                description: "This service has been set to maintenance"
            };

            if (this.getData.serviceMaintenanceTime > 0){
                limitResponse.message = "Service not available, Please try again in " + this.getData.serviceMaintenanceTime + " minutes.";
            }

            return limitResponse;
        }

        return true;
    }

}