const express = require('express');
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
var cors = require('cors')


const route=require('./app/routes/router')
mongoose.Promise = global.Promise;
// create express app
const app = express();


app.use(cors())

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({
  extended: true
}));
app.use('/api', route);



app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});


// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

