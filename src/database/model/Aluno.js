const mongoose = require('mongoose');

const AlunoSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    idade: Number,
    matricula: {
        type: String, 
        required: true,
        unique: true
    },
    curso: String,
    serie: String
},{ collection: 'aluno' });

module.exports = mongoose.model('Aluno', AlunoSchema);