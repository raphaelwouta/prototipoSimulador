var express = require('express');
var app = express();
var path = require('path');

app.use('/scripts', express.static(path.join(__dirname + "/scripts")));
app.use('/content', express.static(path.join(__dirname + "/content")));
app.use('/views', express.static(path.join(__dirname + "/views")));
app.use('/controllers', express.static(path.join(__dirname + "/controllers")));
app.use('/filters', express.static(path.join(__dirname + '/filters')));
app.use('/components', express.static(path.join(__dirname + '/components')));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + '/views/simulador.html'));
});

app.get("/app.html", function (req, res) {
    res.sendFile(path.join(__dirname + '/views/simulador.html'));
});

app.listen(5000, function () {
    console.log("O servidor está escutando na porta 5000");
});