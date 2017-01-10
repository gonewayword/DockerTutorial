var express = require('express')
var PORT = 8080;
var app = express();

app.get('/', function(req, res) {
	res.send('hello world');
});

app.listen(PORT);
console.log(`Listening at http://localhost:${PORT}`);
