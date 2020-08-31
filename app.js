const express  =  require('express');

const bodyparser = require('body-parser');

const cors = require('cors');

require('dotenv/config');

//DATABASE
require('./src/db/seed.db');

const app = express();

//MIDDLEWARES
app.use(cors());
app.use(bodyparser.json());

//ROUTES
const postRoutes = require('./src/routes/posts');

app.use('/api/v1/', postRoutes);

app.get('/', (req, res) => {
   res.json({message: "Welcome to Ecobank QR API"});
});

//start listening
app.listen(3000);