// get mongoose 
const mongoose = require('mongoose');

//connect to mongodb
mongoose.connect(process.env.MONGO_URI ||'mongodb://localhost:27017/ecommerce_api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


// aq4xYKr5hVx36vc1

//acquire the connection to check if it is successful
const db = mongoose.connection;

//Error
db.on('error', () => {
    console.log('Error connecting to db');
});

//up and running then print the message
db.once('open', () => {
    console.log('Connected to db successfully');
})