const mongoose = require('mongoose');
const ProfessorSchema = mongoose.Schema({
    name: String,
    idade: Number,
    disciplina: String,
    date: Date
});

module.exports = mongoose.model('Professor', ProfessorSchema);