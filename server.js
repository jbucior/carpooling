var express = require('express');
var app = express();

app.use(express.static(__dirname + '/app'));

app.get('/', function (req, res) {
    res.sendFile('./app/index.html', {root: __dirname});
});

app.get('/config', function (req, res) {
    res.send({backend: process.env.BACKEND_URL});
});

app.listen(process.env.PORT || 3000);