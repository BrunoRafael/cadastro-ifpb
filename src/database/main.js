const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://ifpb:xrPkXujT5YOwgcFA@cluster0-7mbkm.mongodb.net/cadastros?retryWrites=true&w=majority", 
(err) => {
    if(err){
        console.log("Falhou conexão");
    }
});

const AlunoModel = require('./model/Aluno');
const FuncionarioModel = require('./model/Funcionario');
const ProfessorModel = require('./model/Professor');
const UsuarioModel = require('./model/Usuario');

let login = (credentials) => {
    return UsuarioModel.find({'login': credentials.login, 'senha': credentials.senha}, 
    (err, response) => {
        if(err){
            throw new Error("Usuário não encontrado!");
        } else {
            return response;
        }
    });
}

let addNewUser = (credentials) => {
    return UsuarioModel.find({'login': credentials.login }, 
    (err, response) => {
        if(err){
            throw new Error("Não foi possível salvar usuário");
        }
        if(response){
            throw new Error("Login duplicado");
        } else {
            let usuario = new UsuarioModel(credentials);
            return usuario.save();
        }
    })
}

let saveAluno = (dados)=>{
    const aluno = new AlunoModel(dados);
    return aluno.save();
}

let deleteAluno = (matricula) => {
    return AlunoModel.deleteOne({"matricula": matricula});
}

let getAllAlunos = () => {
    return AlunoModel.find({});
}

let removeAluno = (alunoId)=>{
    AlunoModel.deleteOne(alunoId, (err) => {
        if(err){
            console.error("Deu PAU");
        }
    });
}

let saveFuncionario = (dados)=>{
    const Funcionario = new FuncionarioModel(dados);
    Funcionario.save((err) => {
        if(err){
            console.error("Deu PAU");
        }
    });
}

let saveProfessor = (dados)=>{
    const Professor = new ProfessorModel(dados);
    Professor.save((err) => {
        if(err){
            console.error("Deu PAU");
        }
    });
}

module.exports = {
    login: login,
    saveAluno: saveAluno,
    saveFuncionario: saveFuncionario,
    saveProfessor: saveProfessor,
    removeAluno: removeAluno,
    getAllAlunos: getAllAlunos,
    deleteAluno: deleteAluno,
    addNewUser: addNewUser
};