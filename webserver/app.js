var express = require('express');
var path = require('path');
var Updates = require('./models/updates');

var app = express();

app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'ejs');

app.use('/gentelella', express.static(path.join('node_modules/gentelella')));

//Home
app.get('/', function(req, res){
	res.render('home');
});

app.get('/api/updates', function(req, res){
	res.json(Updates.getUpdateVersion());
});

app.get('*', function(req, res){
	res.render('404');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
