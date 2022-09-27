//getting all the libraries and modules
const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const db = require('./config/mongoose');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');
var corsOptions = {
    origin: '*'
};

const port = process.env.PORT || 8000;

// we need to fire up the express as a funcion to use all the functionalities of express

const app = express();

//middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', productRoutes);

app.get('/', (req, res)=>{
    res.send('Hey node server is running');
});

// listening to port
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});