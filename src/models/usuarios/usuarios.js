const mongoose = require('mongoose');
const { Schema } = mongoose;
const { composeWithMongoose } = require('graphql-compose-mongoose');


const TasksUsuarios = new Schema({
    email: String,
    documentID: String,
    fullname: String,
    password: String,
    role: String,
    state: String
});

module.exports = {
    TasksUsuarios: mongoose.model("Users", TasksUsuarios),
    UsersTC: composeWithMongoose(mongoose.model("Users"))
};