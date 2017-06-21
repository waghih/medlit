var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/team', function(request, response) {
  response.render('pages/team');
});

app.get('/about', function(request, response) {
  response.render('pages/about');
});

app.get('/activity', function(request, response) {
  response.render('pages/activity');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


