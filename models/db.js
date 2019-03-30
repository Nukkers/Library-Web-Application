// Set up Database

// import the mongoose module
var mongoose = require('mongoose');

// Setup the default mongoose connection
var mongoDB = 'mongodb://localhost:27017/local_library';
mongoose.connect(mongoDB, {useNewUrlParser: true});

// Get the default connection
var db = mongoose.connection;

// Bind the connection to error event ( to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));