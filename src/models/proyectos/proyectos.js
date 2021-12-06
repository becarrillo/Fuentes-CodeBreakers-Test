const mongoose = require('mongoose');
const { Schema } = mongoose;
const { composeWithMongoose } = require('graphql-compose-mongoose');


const TasksProyectos = new Schema({
    name: String,
    specific_objctve: String,
    general_objctve: String,
    estimate: Number,
    beginning: Date,
    finishing: Date,
    documentIDofLead: String,
    name_lead: String, 
    projectstate: String,
    projectphase: String
});
module.exports = {
    TasksProyectos: mongoose.model("Projects", TasksProyectos),
    ProjectsTC: composeWithMongoose(mongoose.model("Projects", TasksProyectos))
};