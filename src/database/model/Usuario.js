const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    login: { 
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true
    }
},{ collection: 'usuario' });

module.exports = mongoose.model('Usuario', UsuarioSchema);