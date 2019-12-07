const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const alunos = require("./src/alunos/alunosRouter");
const professores = require("./src/professores/professoresRouter");
const funcionarios = require("./src/funcionarios/funcionariosRouter");
const auth = require("./src/auth/authRouter");
app.use(bodyParser.json());
app.use(cors());

app.use("/alunos", alunos);
app.use("/professores", professores);
app.use("/funcionarios", funcionarios);
app.use("/login", auth);

app.listen(3000, () => {
    console.log("Hello World");
});

// Métodos HTTP
app.get("/", (req, res) => {
    console.log(req.params);
    res.send('Hello World!');
});



