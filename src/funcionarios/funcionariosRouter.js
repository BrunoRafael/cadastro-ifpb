const express = require("express");
const router = express.Router();

router.get("/visualizar", (req, res) => {
    res.send('Oi sou um Funcionário ***** ');
});

router.post("/", (req, res) => {
    console.log("Adicionar Funcionário");
    res.send('Oi Sou um aluno');
});

router.put("/", (req, res) => {
    console.log(req.body);
    console.log("Atualizar dados de funcionarios");
    res.send('Oi Sou um aluno');
});

router.get("/", (req, res) => {
    console.log(req.query);
    res.send('Oi Sou um Professor');
});

router.delete("/", (req, res) => {
    console.log(req.body);
    console.log("Atualizar dados de funcionarios");
    res.send('Oi Sou um aluno');
});

module.exports = router;