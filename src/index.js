const db = require('./db.js');
const express = require('express');
const app = express();
const PORT = 3000;


app.get('/', function (req, res) {
  res.send('Hello World');
});


app.get('/users/', function(req,res){
	db.select().from('users').then(function(e){
		res.send(e.map(function(c){return c.email}));
	})
})

app.get('/*', function (req, res) {

db.insert('url')
  res.send(req.originalUrl);
});

console.log('server is running on ' + PORT)
app.listen(PORT);
