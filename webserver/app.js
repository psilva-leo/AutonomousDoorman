var express = require('express');
var path = require('path');
var app = express();
var port = 8000;

app.set('view engine', 'ejs');
app.use('/gentelella', express.static(path.join(__dirname, '/node_modules/gentelella')));

// Home
app.get('/', function(req, res){
	res.render('home');
});

// Test
app.get('/test/:testvar?', function(req, res){
	var testvar = req.params.testvar;
	res.send("This is a response on test " + testvar);
});

// Not founf (404)
app.get('*', function(req, res){
	res.render('404');
});

// Botton of file
app.listen(port, function(err, res){
	if(err){
		console.log('server crashed');
	}else{
		console.log('Server started and listening on port 8000');
	}
});