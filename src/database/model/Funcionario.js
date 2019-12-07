const mongoose = require('mongoose');

const FuncionarioSchema = mongoose.Schema({
    name: String,
    idade: Number,
    sector: String
});

module.exports = mongoose.model('Funcionario', FuncionarioSchema);