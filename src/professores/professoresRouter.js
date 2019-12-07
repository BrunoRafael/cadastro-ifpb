const express = require("express");
const router = express.Router();


router.post("/", (req, res) => {
    console.log("Adicionar professor");
    res.send(req.body);
});

router.put("/", (req, res) => {
    console.log(req.body);
    console.log("Atualizar dados de professores");
    res.send('Oi Sou um aluno');
});

router.get("/", (req, res) => {
    console.log(req.query);
    res.send('Oi Sou um Professor');
});

router.delete("/:professorId", (req, res) => {
    res.send(req.params);
});

module.exports = router;