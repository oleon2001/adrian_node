const router = require("express").Router();

router.get("/dbprueba", (req, res) => {
    res.send('Is a router')
});

router.get("/dbprueba", (req, res) => {
    res.send('Is a router')
});

router.post("/dbprueba", (req, res) => {
    res.send('Is a router')
});

router.put("/dbprueba", (req, res) => {
    res.send('Is a router')
});

module.exports = router;