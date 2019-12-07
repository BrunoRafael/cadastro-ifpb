const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    res.json({"login": req.body.login, "password": req.body.password});
});

module.exports = router;