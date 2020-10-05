const mongoose  =  require('mongoose');

require('dotenv/config');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_LOCAL_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize : 7
 }, () => {
    console.log('connected to DB!')
 });

module.exports=mongoose;