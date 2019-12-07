const express = require("express");
const router = express.Router();

const dbManager = require('../database/main');
router.post("/", (req, res) => {
    dbManager.saveAluno(req.body).
    then((response) => {
        res.send({status:200, message:'Aluno registrado', data: response});
    }).catch((err) => {
        res.send({status:500, message:err.message, err: err});
    });
});

router.get("/", (req, res) => {
    dbManager.getAllAlunos().exec((err, response) => {
        if (!err){ 
            res.send(response);
        } else {
            throw err;
        }
    });
});

router.delete("/:matricula", (req, res) => {
    dbManager.deleteAluno(req.params.matricula).exec((err, response) => {
        if(!err){
            res.send(response);
        } else {
            throw err;
        }
    });
});

router.put("/", (req, res) => {
    res.send(req.body);
});

module.exports = router;