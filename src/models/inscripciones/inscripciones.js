const mongoose = require('mongoose');
const { composeWithMongoose } = require('graphql-compose-mongoose');
const { Schema } = mongoose.Schema;

const TasksInscripciones = new Schema({
    studentId: String,
    projectId: String
});
module.exports = {
    TasksInscripciones: mongoose.model("inscriptions", TasksInscripciones),
    UsersTC: composeWithMongoose(mongoose.model("inscriptions", TasksInscripciones))
}