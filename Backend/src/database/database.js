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
    console.log("could not connect");
};