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

let saveAluno = (dados)=>{
    const Aluno = new AlunoModel(dados);
    return Aluno.save();
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
    saveAluno: saveAluno,
    saveFuncionario: saveFuncionario,
    saveProfessor: saveProfessor,
    removeAluno: removeAluno,
    getAllAlunos: getAllAlunos,
    deleteAluno: deleteAluno
};