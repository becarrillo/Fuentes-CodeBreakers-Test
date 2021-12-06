const mongoose = require('mongoose');
require('dotenv').config;


const mongoCompassUri = `${process.env.DATABASE_URI}`;

try {
    mongoose.connect(
        mongoCompassUri,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log(" Mongoose is connected")
    );
    
} catch (e) {
    console.log("could you are not connect");
};

mongoose.connection.on('connected', function () {
    const database = mongoose.connection.db('CodeBreakersTest');
    console.log("Connected to database");
    module.exports = database;
});