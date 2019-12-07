const express = require("express");
const router = express.Router();

const dbManager = require('../database/main');

router.post("/login", (req, res) => {
    dbManager.login(req.body).exec((err, response) => {
        if(!err){
            res.send({status: 200, messagem:"Login realizado com sucesso!", data: response})
        }
    });
});

router.post("/", (req, res) => {
    dbManager.addNewUser(req.body).
    then((response) => {
        res.send({status: 200, message:"Usuário inserido com sucesso!", data: response})
    }).catch((error) => {
        res.send({status: 500, message:error.message, data: error})
    });
});

module.exports = router;