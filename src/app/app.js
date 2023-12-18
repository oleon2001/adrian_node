const express = require('express')
const morgan = require('morgan');

const router = require("../router/dbprueba.router")

const app = express();

app.use(morgan("dev"));

app.get('/', (req, res) => {
    res.send("It's work");
});

app.use("/api/v1", router)

module.exports = app;