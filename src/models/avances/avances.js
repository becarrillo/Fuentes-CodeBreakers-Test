const mongoose = require('mongoose');
const { composeWithMongoose } = require('graphql-compose-mongoose');
const { Schema } = mongoose;

const TasksAdvances = new Schema({
    advanceId: String,
    projectId: String,
    studentId: String,
    advanceDate: Date,
    description: String,
    observation: String
});
module.exports = {
    TasksAdvances: mongoose.model("inscriptions", TasksAdvances),
    AdvancesTC: composeWithMongoose(mongoose.model("advances", TasksAdvances))
};